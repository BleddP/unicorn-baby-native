import { TouchableOpacity } from 'react-native'

// Icons
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const Share = () => {

    const handleShare = () => {
        console.log("@Todo: share..")
    }

    return (
        <TouchableOpacity style={styles.button} onPress={handleShare}>
            <AntDesign name="sharealt" size={20} color='#ef0a6a' />
        </TouchableOpacity>
    )
}

export default Share