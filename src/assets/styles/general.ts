import { Colors } from "@/src/constants/Colors"
import { StyleSheet } from "react-native"
import { ImageStyle, TextStyle, ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes"

const baseBtnStyle: ViewStyle | TextStyle | ImageStyle = {
    backgroundColor: Colors.light.btnPrimary,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
}
export const generalStyles = StyleSheet.create({
    containerFlex: {
        flex: 1,

    },
    
    containerFullScreen: {
        height: "100%",
        justifyContent: "space-between",
    }
    ,
    btnPrimaryLarge: {
        ...baseBtnStyle,
        width: 314,
        height: 120,
    },
    btnPrimaryMedium: {
        ...baseBtnStyle,
        width: 231,
        height: 71
    }
    ,
    textBtnPrimary: {
        fontSize: 36,
        fontFamily: "Roboto_900Black",
        color: Colors.light.textLight,
        
    }
})