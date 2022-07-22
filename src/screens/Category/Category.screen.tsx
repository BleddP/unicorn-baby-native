import { View, ScrollView, Text } from 'react-native';

// Layout
import Container from '../../components/layout/Container';
import Background from '../../components/layout/Background';
import Header from '../../components/layout/Header';
import Tabs from '../../components/layout/Tabs';

const CategoryScreen = () => {

    const header = {
        title: 'Little Ladies',
        subtitle: 'Girls just wanna have fun',
        image: require('../../assets/backgrounds/pink-orange.png')
    }

    return (
        <Background>
            <Header
                title={header.title}
                subtitle={header.subtitle}
                image={header.image}
            />
            <ScrollView>
                <Container>
                    <View>
                        <Text>Little Ladies View</Text>
                    </View>
                </Container>
            </ScrollView>
            <Tabs />
        </Background>
    )
}

export default CategoryScreen