import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    containerPlayerScore: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 8,
        width: "100%"

    },
    textScore: {
        color: Colors.light.btnPrimary,
        fontFamily: "Roboto_900Black",
        fontSize: 24,
        
    },
    scoresContainer: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        rowGap: 8,
        width: "100%"
    }
})