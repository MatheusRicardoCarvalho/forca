import { generalStyles } from "@/src/assets/styles/general";
import { TouchableOpacity, Text } from "react-native";

interface Props {
    textBtn: string;
    onPress?: () => void;
}

export default function ButtonPrimary({ textBtn, onPress }: Props) {
    return (
        <TouchableOpacity 
            style={generalStyles.btnPrimaryMedium}
            onPress={onPress} 
        >
            <Text style={generalStyles.textBtnPrimary}>
                {textBtn}
            </Text>
        </TouchableOpacity>
    );
}
