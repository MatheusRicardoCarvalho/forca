import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { loginStyles } from "../assets/styles/login";
import { generalStyles } from "../assets/styles/general";
import forcaImage from "../assets/images/forca.png"
import { Link } from "expo-router";

export default function index() {
  return (
    <View style={generalStyles.containerFullScreen}>
      <View style={loginStyles.titleContainer}>
        <Text style={loginStyles.title2}>Jogo Da</Text>
        <Text style={loginStyles.title1}>Forca</Text>
      </View>
      <View style={loginStyles.optionsContainer}>
        <Link href={"/Register"} asChild>
        <TouchableOpacity style={generalStyles.btnPrimaryLarge}>
          <Text style={generalStyles.textBtnPrimary}>Cadastrar-se</Text>
        </TouchableOpacity>
        </Link>
        <Link href={"/login"} asChild>
        <TouchableOpacity style={generalStyles.btnPrimaryLarge}>
          <Text style={generalStyles.textBtnPrimary}>Login</Text>
        </TouchableOpacity>
        </Link>
      </View>
      <View style={loginStyles.forcaContainer}>
        <Image 
        source={forcaImage}
        />
      </View>
    </View>
  );
}
