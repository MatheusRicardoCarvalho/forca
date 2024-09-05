import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { WordGuessStyle } from "./styles";

interface WordGuessProps {
    palavra: string;
    letrasAcertadas: string[]; // Letras que o usuário já acertou
}

export function WordGuess(props: WordGuessProps) {
    const { palavra, letrasAcertadas } = props;

    return (
        <View style={WordGuessStyle.container}>
            {
                palavra.split("").map((letra, index) => (
                    <Text key={index} style={WordGuessStyle.letra}>
                        {letrasAcertadas.includes(letra.toLowerCase()) ? letra : "_"}
                    </Text>
                ))
            }
        </View>
    );
}
