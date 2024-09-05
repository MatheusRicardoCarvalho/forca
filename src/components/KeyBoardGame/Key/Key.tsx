import { View } from "react-native";
import { keyStyles } from "./styles";

interface keyProp {
    keyName: string
}

export default function Key(props: keyProp){

    return (
        <View
        style={keyStyles.key}
        >
            {props.keyName}
            
        </View>
    )
}