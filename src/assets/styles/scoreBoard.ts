import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";


export const scoreBoardStyles = StyleSheet.create({
    containerFull: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containterTitle: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    list: {
        paddingHorizontal: 20,
    },
    scoreItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    rank: {
        width: 30,
        fontWeight: 'bold',
    },
    email: {
        flex: 1,
        marginHorizontal: 10,
    },
    score: {
        width: 50,
        textAlign: 'right',
        fontWeight: 'bold',
    },
});