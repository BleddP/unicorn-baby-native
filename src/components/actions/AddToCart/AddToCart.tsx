import { TouchableOpacity } from 'react-native'

// Icons
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const AddToCart = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <AntDesign name="shoppingcart" size={20} color='#ef0a6a' />
        </TouchableOpacity>
    )
}

export default AddToCart