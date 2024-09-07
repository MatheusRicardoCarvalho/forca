import { gameStyles } from "@/src/assets/styles/game";
import { View, Image } from "react-native";
import forca from "../assets/images/forca.png";
import face from "../../assets/images/boneco/Face.png";
import body from "../../assets/images/boneco/Body.png";
import arm_right from "../../assets/images/boneco/Arm_right.png";
import arm_left from "../../assets/images/boneco/Arm_left.png";
import leg_right from "../../assets/images/boneco/Leg_right.png";
import leg_left from "../../assets/images/boneco/Leg_left.png";

interface BonecoProps {
    countErrors: number
}

export function Boneco(props: BonecoProps){
    const {countErrors} = props
    return (
        <View style={gameStyles.forcaContainer}>
                {countErrors >= 1 && (
                    <Image 
                        source={face}
                        style={gameStyles.face}
                    />
                )}
                {countErrors >= 2 && (
                    <Image 
                        source={body}
                        style={gameStyles.body}
                    />
                )}
                {countErrors >= 3 && (
                    <Image 
                        source={arm_right}
                        style={gameStyles.arm_right}
                    />
                )}
                {countErrors >= 4 && (
                    <Image 
                        source={arm_left}
                        style={gameStyles.arm_left}
                    />
                )}
                {countErrors >= 5 && (
                    <Image 
                        source={leg_right}
                        style={gameStyles.leg_right}
                    />
                )}
                {countErrors >= 6 && (
                    <Image 
                        source={leg_left}
                        style={gameStyles.leg_left}
                    />
                )}
            </View>
    )
}