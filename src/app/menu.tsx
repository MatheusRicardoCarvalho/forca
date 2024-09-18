import { Link, router } from "expo-router";
import { Text, Image, Alert } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { generalStyles } from "../assets/styles/general";
import { loginStyles } from "../assets/styles/login";
import { menuStyles } from "../assets/styles/menu";
import boneco from "../assets/images/boneco_na_corda_menu.png";
import logo from "../assets/images/logo.png";
import { getAuth, signOut } from "firebase/auth";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

export default function Menu() {
  const auth = getAuth();
  const authContext = useContext(AuthContext);

  async function sair() {
    try {
      await signOut(auth);
      authContext.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.error("Erro ao sair:", error);
      Alert.alert(
        "Erro ao sair",
        "Tente novamente mais tarde.\n" + (error instanceof Error ? error.message : "Erro desconhecido")
      );
    }
  }

  return (
    <View style={generalStyles.containerFullScreen}>
      <View style={menuStyles.imageContainer}>
        <Image source={boneco} />
      </View>
      <View style={loginStyles.optionsContainer}>
        <Link href={"/Game"} asChild>
          <TouchableOpacity style={generalStyles.btnPrimaryMedium}>
            <Text style={generalStyles.textBtnPrimary}>Jogar</Text>
          </TouchableOpacity>
        </Link>
        <Link href={"/ScoreBoard"} asChild>
          <TouchableOpacity style={generalStyles.btnPrimaryMedium}>
            <Text style={generalStyles.textBtnPrimary}>Recordes</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={generalStyles.btnPrimaryMedium} onPress={() => sair()}>
          <Text style={generalStyles.textBtnPrimary}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={menuStyles.imageContainer}>
        <Image style={menuStyles.imgLogo} source={logo} />
      </View>
    </View>
  );
}
