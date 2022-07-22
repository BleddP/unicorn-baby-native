import { Text, View } from 'react-native';

// Layout
import Background from '../../components/layout/Background';
import Header from '../../components/layout/Header';

const HomeScreen = () => {
    return (
        <Background>
            <Header image={require('../../assets/images/header.jpg')} />
        </Background>
    )
}

export default HomeScreen