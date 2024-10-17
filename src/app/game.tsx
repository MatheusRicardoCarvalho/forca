import { View, Text, Image, Modal, Pressable } from "react-native";
import KeyBoardGame from "../components/KeyBoardGame/KeyBoardGame";
import { useEffect, useLayoutEffect, useState } from "react";
import { CalculateScore, gameDataConfig, Tema } from "../gameDataConfig/gameDataConfig";
import { WordGuess } from "../components/WordGuess/WordGuess";
import { gameStyles } from "../assets/styles/game";
import { Cronometro } from "../components/Cronometro/Cronometro"; 
import moment from 'moment';
import forca from "../assets/images/forca.png";
import { Boneco } from "../components/Boneco/Boneco";
import ButtonPrimary from "../components/ButtonPrimary/ButtonPrimary";
import ModalEuSei from "../components/ModalEuSei/ModalEuSei";
import { router } from "expo-router";
import { registerGame } from "../services/gameService";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function Game() {
    const [tema, setTema] = useState<Tema>();
    const [palavra, setPalavra] = useState('');
    const [letrasAcertadas, setLetrasAcertadas] = useState<string[]>([]);
    const [countErrors, setCountErrors] = useState(0);
    const [tempoFinal, setTempoFinal] = useState<string>('');
    const [cronometroIniciado, setCronometroIniciado] = useState(false);
    const [tempoDecorrido, setTempoDecorrido] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [tentativas, setTentativas] = useState(0);

    const  authContext  = useContext(AuthContext);

    useEffect(() => {
        const { tema, palavra } = gameDataConfig();
        setPalavra(palavra);
        setTema(tema);
        iniciarCronometro(); 
    }, []);

    useEffect(() => {
        StatusGame();
    }, [letrasAcertadas, countErrors]);

    function verificarLetra(letra: string) {
        setTentativas(prev => prev +1)

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

    function verificarPalavraTentada(tentativa: string) {
        setTentativas(prev => prev +1)

        if (tentativa.toLowerCase() === palavra.toLowerCase()) {
            WinGame();
        } else {
            alert("Palavra incorreta!");
            setCountErrors(prev => prev + 1);
        }
    }

    function StatusGame() {
        const letrasUnicasPalavra = Array.from(new Set(palavra.toLowerCase()));

        if (countErrors >= 6) LoseGame();
        if (letrasUnicasPalavra.every(letra => letrasAcertadas.includes(letra)) && palavra !== '') WinGame();
    }

    function LoseGame() {
        pausarCronometro();
        endGame(false)
    }

    function WinGame() {
        pausarCronometro();
        const tempoFinalFormatado = moment.utc(tempoDecorrido * 1000).format('HH:mm:ss');
        setTempoFinal(tempoFinalFormatado);
        endGame(true)
    }

    async function endGame(win: boolean) {
        const tempoFinalFormatado = moment.utc(tempoDecorrido * 1000).format('HH:mm:ss');

        const score = CalculateScore(tempoFinalFormatado, tentativas, win);

        await sendGame(score);

        if (win) {
            console.log("Tentativas: " + tentativas + "\n Time: " + tempoFinalFormatado);
            router.push({
                pathname: "/WinScreen",
                params: { score },
            });
        } else {
            console.log("Tentativas: " + tentativas + "\n Time: " + tempoFinalFormatado);
            router.push({
                pathname: "/LoseScreen",
                params: { score },
            });
        }
    }
    

    const iniciarCronometro = () => {
        setCronometroIniciado(true);
    };

    const pausarCronometro = () => {
        setCronometroIniciado(false);
    };

    async function sendGame(score: number) {
        if (authContext && authContext.user?.email) {
            try {
                await registerGame(score, authContext.user?.email);
            } catch (error) {
                console.error("Erro ao registrar o jogo:", error);
            }
        }
    }

    return (
        <View>
            <Text style={gameStyles.title}>Tema: {tema}</Text>
            <Cronometro
                iniciado={cronometroIniciado}
                onTempoDecorrido={setTempoDecorrido}
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
                    <ModalEuSei 
                        modalVisible={modalVisible} 
                        setModalVisible={setModalVisible}
                        palavraCorreta={palavra} 
                        onValidarPalavra={verificarPalavraTentada}
                    />
                </Modal>
                <ButtonPrimary textBtn="Eu sei!" onPress={() => setModalVisible(true)} />
            </View>
        </View>
    );
}
