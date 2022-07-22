import { Text } from "react-native"
import styles from './typography.styles'

interface Props {
    style?: object,
    color?: string
}

const H2: React.FC<Props> = ({ children, style, color }) => {
    return (
        <Text style={{ ...styles.h2, ...style, color: color }}>{children}</Text>
    )
}

export default H2