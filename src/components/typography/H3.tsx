import { Text } from "react-native"
import styles from './typography.styles'

interface Props {
    style?: object,
    color?: string
}

const H3: React.FC<Props> = ({ children, style, color }) => {
    return (
        <Text style={{ ...styles.h3, ...style, color: color }}>{children}</Text>
    )
}

export default H3