import { Text } from "react-native"
import styles from './typography.styles'

interface Props {
    style?: object,
    color?: string
}

const Span: React.FC<Props> = ({ children, style, color }) => {
    if (color) {
        return (
            <Text style={{ ...styles.span, ...style, color: color }}>{children}</Text>
        )
    } else {
        return (
            <Text style={{ ...styles.span, ...style }}>{children}</Text>
        )
    }
}

export default Span