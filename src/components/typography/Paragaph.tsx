import { Text } from "react-native"
import styles from './typography.styles'

interface Props {
    style?: object,
    color?: string
}

const Paragraph: React.FC<Props> = ({ children, style, color }) => {
    return (
        <Text style={{ ...styles.paragraph, ...style, color: color }}>{children}</Text>
    )
}

export default Paragraph