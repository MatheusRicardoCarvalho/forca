import { TextInput, View, Text, TouchableOpacity, Alert } from "react-native";
import { loginStyles } from "../assets/styles/login";
import { useContext, useState } from "react";
import { generalStyles } from "../assets/styles/general";
import { Link, router } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "../services/firebase";
import AuthContext from "../context/AuthContext";

export default function login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const authContext = useContext(AuthContext);
  const auth = getAuth(firebase);

  function signIn(){
    signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    const user = userCredential.user;
    authContext.setUser(user);
    router.push("/Menu")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Erro no login ! \nTente novamente mais tarde")
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
        <TouchableOpacity style={generalStyles.btnPrimaryLarge} onPress={() => signIn()}>
          <Text style={generalStyles.textBtnPrimary}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
