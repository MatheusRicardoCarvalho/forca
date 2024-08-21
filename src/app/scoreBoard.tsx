import { View , Text} from "react-native";
import { generalStyles } from "../assets/styles/general";
import { scoreBoardStyles } from "../assets/styles/scoreBoard";
import ScoreBoardList from "../components/ScoreBoardList.tsx";


export default function scoreBoard(){

    return(
        <View style={scoreBoardStyles.containerFull}>
            <View style={scoreBoardStyles.containterTitle}>
                <Text style={scoreBoardStyles.title}>Recordes</Text>
            </View>
            <View style={scoreBoardStyles.cotainerScoreBoard}>
                <ScoreBoardList />
            </View>
        </View>
    )
}