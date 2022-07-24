import { Text } from "react-native"
import styles from './typography.styles'

interface Props {
    style?: object,
    color?: string
}

const H2: React.FC<Props> = ({ children, style, color }) => {

    if (color) {
        return (
            <Text style={{ ...styles.h2, ...style, color: color }}>{children}</Text>
        )
    } else {
        return (
            <Text style={{ ...styles.h2, ...style }}>{children}</Text>
        )
    }
}

export default H2