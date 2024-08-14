import { TextInput, View } from "react-native";
import { loginStyles } from "../assets/styles/login";
import { useState } from "react";
import { generalStyles } from "../assets/styles/general";

export function register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    return (
      <View style={generalStyles.containerFullScreen}>
        <View style={loginStyles.optionsContainer}>
        <View style={loginStyles.inputContainer}>
          <TextInput
            style={loginStyles.inputText}
            placeholder="Nome"
            placeholderTextColor="#C4C4C4"
            value={nome}
            onChangeText={setNome}
          />
        </View>
        <View style={loginStyles.inputContainer}>
          <TextInput
            style={loginStyles.inputText}
            placeholder="Email"
            placeholderTextColor="#C4C4C4"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={loginStyles.inputContainer}>
          <TextInput
            style={loginStyles.inputText}
            placeholder="Senha"
            placeholderTextColor="#C4C4C4"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>
      </View>
      </View>
    );
}