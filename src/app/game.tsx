import { View } from "react-native";
import KeyBoardGame from "../components/KeyBoardGame/KeyBoardGame";
import { useEffect, useState } from "react";
import { gameDataConfig, Tema } from "../gameDataConfig/gameDataConfig";

export default function game(){
    const [tema, setTema] = useState<Tema>()
    const [palavra , setPalavra] = useState('')

    useEffect(() => {
        const {tema, palavra} = gameDataConfig();
        setPalavra(palavra)
        setTema(tema)
    }, [])
    return (
        <>
        <View>{tema} aaaaa: {palavra}</View>
            <KeyBoardGame />
        </>
    )
}