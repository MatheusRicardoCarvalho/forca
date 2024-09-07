import { View, Text, Image, Modal, Pressable } from "react-native";
import KeyBoardGame from "../components/KeyBoardGame/KeyBoardGame";
import { useEffect, useLayoutEffect, useState } from "react";
import { gameDataConfig, Tema } from "../gameDataConfig/gameDataConfig";
import { WordGuess } from "../components/WordGuess/WordGuess";
import { gameStyles } from "../assets/styles/game";
import { Cronometro } from "../components/Cronometro/Cronometro"; // Importa o cronômetro
import moment from 'moment';
import forca from "../assets/images/forca.png";
import { Boneco } from "../components/Boneco/Boneco";
import ButtonPrimary from "../components/ButtonPrimary/ButtonPrimary";
import { stylesModal } from "../assets/styles/modal";

export default function Game() {
    const [tema, setTema] = useState<Tema>();
    const [palavra, setPalavra] = useState('');
    const [letrasAcertadas, setLetrasAcertadas] = useState<string[]>([]);
    const [countErrors, setCountErrors] = useState(0);
    const [tempoFinal, setTempoFinal] = useState<string>('');
    const [cronometroIniciado, setCronometroIniciado] = useState(false);
    const [tempoDecorrido, setTempoDecorrido] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    useLayoutEffect(() => {
        const { tema, palavra } = gameDataConfig();
        setPalavra(palavra);
        setTema(tema);
        iniciarCronometro(); // Inicia o cronômetro no início do jogo
    }, []);

    useEffect(() => {
        StatusGame();
    }, [letrasAcertadas, countErrors]);

    function verificarLetra(letra: string) {
        if (palavra.toLowerCase().includes(letra.toLowerCase())) {
            setLetrasAcertadas(prevLetrasAcertadas => {
                if (!prevLetrasAcertadas.includes(letra.toLowerCase())) {
                    return [...prevLetrasAcertadas, letra.toLowerCase()];
                }
                return prevLetrasAcertadas;
            });
            console.log("Letra correta: " + letra);
        } else {
            setCountErrors(prev => prev + 1);
            console.log("Letra incorreta: " + letra);
        }
    }

    function StatusGame() {
        const letrasUnicasPalavra = Array.from(new Set(palavra.toLowerCase()));

        if (countErrors >= 6) LoseGame();
        if (letrasUnicasPalavra.every(letra => letrasAcertadas.includes(letra)) && palavra !== '') WinGame();
    }

    function LoseGame() {
        pausarCronometro();
        alert("PERDEU!");
    }

    function WinGame() {
        pausarCronometro(); // Pausa o cronômetro ao vencer
        const tempoFinalFormatado = moment.utc(tempoDecorrido * 1000).format('HH:mm:ss');
        setTempoFinal(tempoFinalFormatado); // Salva o tempo final formatado
        alert(`GANHOU! Tempo total: ${tempoFinalFormatado}`);
    }

    const iniciarCronometro = () => {
        setCronometroIniciado(true); // Iniciar cronômetro
    };

    const pausarCronometro = () => {
        setCronometroIniciado(false); // Pausar cronômetro
    };

    return (
        <View>
            <Text style={gameStyles.title}>Tema: {tema}</Text>
            <Cronometro
                iniciado={cronometroIniciado}
                onTempoDecorrido={setTempoDecorrido} // Atualiza o tempo no estado
            />

            <Image
                source={forca}
                style={gameStyles.forca}
            />
            <Boneco countErrors={countErrors}></Boneco>


            <View style={gameStyles.MainGameView}>
                <WordGuess palavra={palavra} letrasAcertadas={letrasAcertadas} />
                <KeyBoardGame verificarLetra={verificarLetra} />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={stylesModal.centeredView}>
                        <View style={stylesModal.modalView}>
                            <Text style={stylesModal.modalText}>Hello World!</Text>
                            <Pressable
                                style={[stylesModal.button, stylesModal.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={stylesModal.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <ButtonPrimary textBtn="Eu sei!" />
            </View>
        </View>
    );
}
