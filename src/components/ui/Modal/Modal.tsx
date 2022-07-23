import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

// Components
import Button from '../Button';
import { H2 } from '../../typography';

const Modal = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <H2 style={{ fontSize: 30 }}>This is a modal!</H2>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}

export default Modal