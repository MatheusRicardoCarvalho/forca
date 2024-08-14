import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      //rowGap: 0,
    },
    optionsContainer: {
        alignItems: "center",
        justifyContent: "center",
        rowGap: 24
    },
    forcaContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingLeft: 16
        //justifyContent: "center",
        //rowGap: 24
    },
    title1: {
        fontSize: 96,
        fontFamily: "Roboto_900Black",
        color: Colors.light.detach
    },
    title2: {
      fontSize: 64,
      fontFamily: "Roboto_900Black",
      color: Colors.light.tint
    },
    texts: {
      fontFamily: 'Roboto_900Black',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: Colors.light.textBold,
        borderRadius: 20,
        height: 60,
        justifyContent: "center",
      },
      inputText: {
        fontSize: 20,
        fontFamily: "Roboto_900Black",
        color: Colors.light.textGrey,
      }
  });