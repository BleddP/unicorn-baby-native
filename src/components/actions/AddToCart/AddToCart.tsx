import { useContext } from 'react';
import { TouchableOpacity } from 'react-native'

// Store
import toasterContext from '../../../store/toaster/toasterContext';

// Icons
import { AntDesign } from '@expo/vector-icons';

// Styles
import styles from './styles';

const AddToCart = () => {

    const { newToaster } = useContext(toasterContext)

    const handleAddToCart = () => {
        newToaster('Item added to cart!')
    }

    return (
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <AntDesign name="shoppingcart" size={20} color='#ef0a6a' />
        </TouchableOpacity>
    )
}

export default AddToCart