import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const gameStyles = StyleSheet.create({
    title: {
        alignSelf: "center",
        fontSize: 32,
        color: Colors.light.tabIconSelected,
        fontFamily: "Roboto_900Black",
    },

    MainGameView: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },

    forcaContainer: {
        width: 200,
        height: "20%",
        position: "relative",
        marginTop: -10,
        //borderWidth: 1
    },

    forca: {
        height: 150,
        resizeMode: "contain"
    },
    face: {
        position: "absolute",
        resizeMode: "contain",
        width: "30%", 
        height: "30%",
        top: "-80%",      
        left: "30%",    
    },
    body: {
        position: "absolute",
        resizeMode: "contain",
        width: "18%",
        height: "30%",
        top: "-58%",
        left: "36%",  
    },
    arm_right: {
        position: "absolute",
        resizeMode: "contain",
        width: "15%",
        height: "20%",
        top: "-55%",
        left: "46%",   
    },
    arm_left: {
        position: "absolute",
        resizeMode: "contain",
        width: "15%",
        height: "20%",
        top: "-55%",     // Ajusta a posição do braço esquerdo
        left: "29%",    // Ajusta a posição do braço esquerdo à esquerda do corpo
    },
    leg_right: {
        position: "absolute",
        resizeMode: "contain",
        width: "15%",
        height: "20%",
        top: "-38%",     // Ajusta a posição da perna direita
        left: "42%",    // Ajusta a posição da perna direita à direita do corpo
    },
    leg_left: {
        position: "absolute",
        resizeMode: "contain",
        width: "15%",
        height: "20%",
        top: "-38%",     // Ajusta a posição da perna esquerda
        left: "33%",    // Ajusta a posição da perna esquerda à esquerda do corpo
    },
});
