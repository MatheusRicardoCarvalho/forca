import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { keyStyles } from "./Key/styles";
import Key from "./Key/Key";
import { letters } from "./alfabeto";
import { keyboardStyles } from "./styles";

interface KeyBoardGameProps {
    verificarLetra: (letra: string) => void
}

export default function KeyBoardGame(props: KeyBoardGameProps) {  
  // Estado para armazenar quais teclas foram pressionadas
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  // Função que lida com a tecla pressionada
  const handlePress = (key: string) => {
    if (!pressedKeys.includes(key)) {
      setPressedKeys([...pressedKeys, key]);
      props.verificarLetra(key)
    }
  };

  return (
    <View style={keyboardStyles.keyboard}>
      {letters.map((letter) => (
        <TouchableOpacity
          key={letter}
          onPress={() => handlePress(letter)}
          style={[
            keyStyles.key,
            pressedKeys.includes(letter) && keyStyles.keyPressed, // Aplica estilo de pressionado
          ]}
        >
          <Text style={keyStyles.keyText}>{letter}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
