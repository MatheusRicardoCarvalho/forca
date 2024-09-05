import { View , Text} from "react-native";
import KeyBoardGame from "../components/KeyBoardGame/KeyBoardGame";
import { useEffect, useState } from "react";
import { gameDataConfig, Tema } from "../gameDataConfig/gameDataConfig";
import { WordGuess } from "../components/WordGuess/WordGuess";
import { gameStyles } from "../assets/styles/game";

export default function Game() {
    const [tema, setTema] = useState<Tema>();
    const [palavra, setPalavra] = useState('');
    const [letrasAcertadas, setLetrasAcertadas] = useState<string[]>([]);
    const [countErrors, setCountErrors] = useState(0);

    useEffect(() => {
        const { tema, palavra } = gameDataConfig();
        setPalavra(palavra);
        setTema(tema);
    }, []);

    useEffect(() => {
        
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
            setCountErrors(prev => prev+1)
            console.log("Letra incorreta: " + letra);
        }
    }

    function StatusGame(){
        if(countErrors >= 6) LoseGame()
    }

    function LoseGame() {
        alert("PERDEU!")
    }
    function WinGame() {
        alert("GANHOU!")
    }

    return (
        <View>
            <Text style={gameStyles.title}>Tema: {tema}</Text>
            <Text>Palavra: {palavra}</Text>
            <Text>Você errou: {countErrors}</Text>
            
            <WordGuess palavra={palavra} letrasAcertadas={letrasAcertadas} />
            <KeyBoardGame verificarLetra={verificarLetra} />
        </View>
    );
}
