import { useState } from "react"
import { View, Text } from "react-native"
import { styles } from "./styles"

interface player {
    name: string,
    score: number
}

const playersMock: player[] = [
    { name: "Alice", score: 1200 },
    { name: "Bob", score: 980 },
    { name: "Charlie", score: 1500 },
    { name: "Diana", score: 1100 },
    { name: "Eve", score: 800 },
    { name: "Frank", score: 1300 },
    { name: "Grace", score: 950 },
    { name: "Heidi", score: 1400 },
    { name: "Ivan", score: 1050 },
    { name: "Judy", score: 1150 }
];


export default function ScoreBoardList(){
    const [players, setPlayers] = useState<player[]>(playersMock)
    //players.
    return(
        <View style={styles.scoresContainer}>
            {players.map((player, index) => (
                <View key={index} style={styles.containerPlayerScore}>
                    <Text style={styles.textScore}>{player.name}</Text>
                    <Text style={styles.textScore}>{player.score}</Text>
                </View>
            ))}
        </View>
    )
}