import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const winScreenStyles = StyleSheet.create({
    mainContent: {
        alignItems: "center",
        rowGap: 10

    },
    gameOverTitle: {
        fontSize: 48,
        fontFamily: "Roboto_900Black",
        color: Colors.light.tint
    },
    scoreText: {
        fontSize: 48,
        fontFamily: "Roboto_900Black",
        color: Colors.light.detach
    },
    numberText: {
        fontSize: 96,
        fontFamily: "Roboto_900Black",
        color: "#000"
    },

})