import { StyleSheet } from "react-native";

export const keyStyles = StyleSheet.create({
  key: {
    //flexWrap: "wrap",
    width: 30,
    height: 30,
    backgroundColor: "blue",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  keyPressed: {
    backgroundColor: "red", // Estilo da tecla pressionada
  },
  keyText: {
    color: "white",
    fontWeight: "bold",
  },
});
