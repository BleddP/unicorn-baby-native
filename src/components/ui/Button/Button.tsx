import { TouchableOpacity, ImageBackground, View } from "react-native";

// Components
import { H4 } from "../../typography";

// Styles
import styles from "./styles";

interface Props {
    title: string
}

const Button: React.FC<Props> = ({ title }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => console.log('pressed')}>
            <ImageBackground source={require('../../../assets/backgrounds/teal.png')}>
                <H4 color='#FFF' style={styles.text}>{title}</H4>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default Button