import { View } from 'react-native'

// Styles
import styles from './styles'

interface Props {
    children: any,
    style?: object
}

const Container: React.FC<Props> = ({ children, style }) => {
    return (
        <View style={{ ...styles.container, ...style }}>{children}</View>
    )
}

export default Container