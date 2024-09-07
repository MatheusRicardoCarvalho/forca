import { generalStyles } from "@/src/assets/styles/general";
import { TouchableOpacity , Text} from "react-native";


interface Props {
    textBtn: string;
    onPress?: () => void;
}


export default function ButtonSecondary ({textBtn, onPress}: Props) {
    return(
        <TouchableOpacity 
            style={generalStyles.btnSecondaryMedium}
            onPress={onPress} 
        >
            <Text style={generalStyles.textBtnSecondary}>
                {textBtn}
            </Text>
        </TouchableOpacity>
    )
}