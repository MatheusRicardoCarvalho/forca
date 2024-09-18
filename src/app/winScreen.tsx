import { View, Image, Text } from "react-native";
import { loseScreenStyles } from "../assets/styles/loseScreen";
import boneco from "../assets/images/boneco-feliz.png"
import { router, useLocalSearchParams } from "expo-router";
import { WinScreenParams } from "./types/dt";
import ButtonPrimary from "../components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary/ButtonSecondary";
import { generalStyles } from "../assets/styles/general";
import { winScreenStyles } from "../assets/styles/winScreen";

export default function WinScreen() {
    const params = useLocalSearchParams();
    const score = params?.score ? Number(params.score) : 0;

    return (
        <>
            <View  style={winScreenStyles.mainContent}>
                <Image 
                    source={boneco}
                />
                <Text style={loseScreenStyles.gameOverTitle}>
                    WIN !
                </Text>
                <Text style={loseScreenStyles.scoreText}>
                    Pontuação
                </Text>
                <Text style={loseScreenStyles.numberText}>
                    {score}
                </Text>
                <ButtonPrimary textBtn="Denovo!"  onPress={() => router.push("/game")}/>
                <ButtonSecondary textBtn="Menu" onPress={() => router.push("/Menu")} />
            </View>
        </>
    );
}
