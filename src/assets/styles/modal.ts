import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const stylesModal = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)", // fundo escuro translúcido
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.light.background,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: Colors.light.textBold,
        fontSize: 18,
    },
    input: {
        height: 40,
        width: 250,
        borderColor: Colors.light.textGrey,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor: Colors.light.textLight,
        color: Colors.light.textBold,
        marginBottom: 20,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: Colors.light.btnPrimary,
    },
    textStyle: {
        color: Colors.light.btnSecondary,
        fontWeight: "bold",
        textAlign: "center",
    }
});
