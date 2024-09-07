import { generalStyles } from "@/src/assets/styles/general";
import { TouchableOpacity , Text} from "react-native";

interface Props {
    textBtn: string
}

export default function ButtonPrimary(props: Props) {

    return (
        <TouchableOpacity style={generalStyles.btnPrimaryMedium}>
                        <Text style={generalStyles.textBtnPrimary}>
                            {props.textBtn}
                        </Text>
        </TouchableOpacity>
    )
}