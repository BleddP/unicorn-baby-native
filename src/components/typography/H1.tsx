import { Text } from "react-native"
import styles from './typography.styles'

interface Props {
    style?: object,
    color?: string
}

const H1: React.FC<Props> = ({ children, style, color }) => {
    return (
        <Text style={{ ...styles.h1, ...style, color: color }}>{children}</Text>
    )
}

export default H1