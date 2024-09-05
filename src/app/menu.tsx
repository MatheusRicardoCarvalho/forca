import { Link } from "expo-router"
import { Text, Image } from "react-native"
import { View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { generalStyles } from "../assets/styles/general"
import { loginStyles } from "../assets/styles/login"
import { menuStyles } from "../assets/styles/menu"
import boneco from "../assets/images/boneco_na_corda_menu.png"
import logo from "../assets/images/logo.png"

export default function menu() {
    return (
        <View style={generalStyles.containerFullScreen}>
<View style={menuStyles.imageContainer}>
                <Image
                    source={boneco}
                />
            </View>
            <View style={loginStyles.optionsContainer}>
                <Link href={"/game"} asChild>
                    <TouchableOpacity style={generalStyles.btnPrimaryMedium}>
                        <Text style={generalStyles.textBtnPrimary}>
                            Jogar
                        </Text>
                    </TouchableOpacity>
                </Link>
                <Link href={"/scoreBoard"} asChild>
                    <TouchableOpacity style={generalStyles.btnPrimaryMedium}>
                        <Text style={generalStyles.textBtnPrimary}>
                            Recordes
                        </Text>
                    </TouchableOpacity>
                </Link>
                <Link href={"/"} asChild>
                    <TouchableOpacity style={generalStyles.btnPrimaryMedium}>
                        <Text style={generalStyles.textBtnPrimary}>
                            Sair
                        </Text>
                    </TouchableOpacity>
                </Link>
            </View>
            <View style={menuStyles.imageContainer}>
                <Image
                style={menuStyles.imgLogo}
                    source={logo}
                />
            </View>
        </View>
    )
}