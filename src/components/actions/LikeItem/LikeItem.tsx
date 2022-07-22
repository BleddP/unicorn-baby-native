import { TouchableOpacity } from 'react-native'

// Icons
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';


const LikeItem = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <AntDesign name="hearto" size={20} color='#ef0a6a' />
        </TouchableOpacity>
    )
}

export default LikeItem