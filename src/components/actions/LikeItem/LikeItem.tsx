import { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native'

// Components
import { H4 } from '../../typography';

// Store
import toasterContext from '../../../store/toaster/toasterContext';

// Icons
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const Popup = () => {
    return (
        <View style={styles.popup}>
            <AntDesign name="hearto" size={24} color='#FFF' />
            <H4 color="#FFF" style={styles.popupText}>Thanks for the like!</H4>
        </View>
    )
}

const LikeItem = () => {
    const { newToaster } = useContext(toasterContext)

    const handleLike = () => {
        newToaster(<Popup />)
    }

    return (
        <TouchableOpacity style={styles.button} onPress={handleLike}>
            <AntDesign name="hearto" size={20} color='#ef0a6a' />
        </TouchableOpacity>
    )
}

export default LikeItem