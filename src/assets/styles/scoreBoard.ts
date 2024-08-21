import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";


export const scoreBoardStyles = StyleSheet.create({
    title: {
        color: Colors.light.tint,
        fontFamily: "Roboto_900Black",
        fontSize: 54
    },
    containterTitle: {
        paddingVertical: 8,
        justifyContent: 'flex-start'
    },
    cotainerScoreBoard: {
        justifyContent: "flex-start"
    },
    containerFull: {
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center"
    }
})