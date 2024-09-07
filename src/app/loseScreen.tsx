import { View , Image, Text} from "react-native";
import boneco_enforcado from "../assets/images/boneco_na_corda_menu.png"
import { loseScreenStyles } from "../assets/styles/loseScreen";
import { router, useLocalSearchParams } from "expo-router";
import ButtonPrimary from "../components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary/ButtonSecondary";
import { generalStyles } from "../assets/styles/general";

export default function loseScreen() {
    const params = useLocalSearchParams();
    const score = params?.score ? Number(params.score) : 0;

    return (
        <>
            <View style={loseScreenStyles.mainContent}>
                <Image 
                source={boneco_enforcado}
                style={loseScreenStyles.boneco}
                />

                <Text style={loseScreenStyles.gameOverTitle}>
                    Game Over
                </Text>
                <Text style={loseScreenStyles.scoreText}>
                    Pontuação
                </Text>
                <Text style={loseScreenStyles.numberText}>
                    {score}
                </Text>
                <ButtonPrimary textBtn="Denovo!"  onPress={() => router.push("/game")}/>
                <ButtonSecondary textBtn="Menu" onPress={() => router.push("/menu")} />
            </View>
        </>
    )
}