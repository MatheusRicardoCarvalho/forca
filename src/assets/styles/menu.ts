import { Colors } from "@/src/constants/Colors"
import { StyleSheet } from "react-native"
import { ImageStyle, TextStyle, ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes"


export const menuStyles = StyleSheet.create({
    imageContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    imgLogo: {
        width: 150,
        height: 150
    }
})