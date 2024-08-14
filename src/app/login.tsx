import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { loginStyles } from "../assets/styles/login";
import { useState } from "react";
import { generalStyles } from "../assets/styles/general";
import { Link } from "expo-router";

export default function login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

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
      <Link href={"/menu"} asChild>
        <TouchableOpacity style={generalStyles.btnPrimaryLarge}>
          <Text style={generalStyles.textBtnPrimary}>Login</Text>
        </TouchableOpacity>
      </Link>
      </View>
    </View>
  );
}
