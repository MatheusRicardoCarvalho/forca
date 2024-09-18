import { TextInput, View, Text, TouchableOpacity, Alert } from "react-native";
import { loginStyles } from "../assets/styles/login";
import { useState } from "react";
import { generalStyles } from "../assets/styles/general";
import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {firebase} from "../services/firebase"
export default function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const auth = getAuth(firebase);

    function createUser(){
      createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        router.push("/Menu")
      const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Erro ao criar usuário ! \nTente novamente mais tarde\n\n"+errorMessage)
    Alert.alert("Erro no login ! \nTente novamente mais tarde\n" +error.message)

  });
    
    }
    return (
      <View style={generalStyles.containerFullScreen}>
        <View style={loginStyles.titleContainer}>
        <Text style={loginStyles.title2}>Jogo Da</Text>
        <Text style={loginStyles.title1}>Forca</Text>
      </View>
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
      <View style={loginStyles.containerbtn}>
        <TouchableOpacity style={generalStyles.btnPrimaryLarge} onPress={() => createUser()}>
          <Text style={generalStyles.textBtnPrimary}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
}