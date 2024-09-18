import { TextInput, View, Text, TouchableOpacity, Alert } from "react-native";
import { loginStyles } from "../assets/styles/login";
import { useContext, useState } from "react";
import { generalStyles } from "../assets/styles/general";
import { router } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebase } from "../services/firebase";
import AuthContext from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const authContext = useContext(AuthContext);
  const auth = getAuth(firebase);

  async function signIn() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      authContext.setUser(user);
      router.push("/Menu");
    } catch (error) {
      console.error("Erro no login:", error);
      Alert.alert(
        "Erro no login",
        "Tente novamente mais tarde.\n" + (error instanceof Error ? error.message : "Erro desconhecido")
      );
    }
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
