import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { scoreBoardStyles } from "../assets/styles/scoreBoard";
import { getTopScores } from "../services/gameService";

interface GameScore {
  id: string;
  score: number;
  userEmail: string;
}

export default function ScoreBoard() {
  const [scores, setScores] = useState<GameScore[]>([]);

  useEffect(() => {
    async function fetchScores() {
      try {
        const topScores = await getTopScores();
        setScores(topScores as GameScore[]);
      } catch (error) {
        console.error("Erro ao buscar pontuações:", error);
      }
    }
    fetchScores();
  }, []);

  const renderItem = ({ item, index }: { item: GameScore; index: number }) => (
    <View style={scoreBoardStyles.scoreItem}>
      <Text style={scoreBoardStyles.rank}>{index + 1}</Text>
      <Text style={scoreBoardStyles.email}>{item.userEmail}</Text>
      <Text style={scoreBoardStyles.score}>{item.score}</Text>
    </View>
  );

  return (
    <View style={scoreBoardStyles.containerFull}>
      <View style={scoreBoardStyles.containterTitle}>
        <Text style={scoreBoardStyles.title}>Recordes</Text>
      </View>
      <FlatList
        data={scores}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={scoreBoardStyles.list}
      />
    </View>
  );
}