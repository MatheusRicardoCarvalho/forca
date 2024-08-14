import { Colors } from "@/src/constants/Colors"
import { StyleSheet } from "react-native"

export const generalStyles = StyleSheet.create({
    containerFlex: {
        flex: 1,

    },
    containerFullScreen: {
        height: "100%",
        justifyContent: "space-between"
    }
    ,
    btnPrimaryLarge: {
        width: 314,
        height: 120,
        backgroundColor: Colors.light.btnPrimary,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    textBtnPrimary: {
        fontSize: 36,
        fontFamily: "Roboto_900Black",
        color: Colors.light.textLight,
        
    }
})