import { View, ScrollView, TouchableOpacity } from 'react-native';

// Layout
import Container from '../../components/layout/Container';
import Background from '../../components/layout/Background';
import Header from '../../components/layout/Header';
import Searchbar from '../../components/ui/Searchbar';
import Card from '../../components/ui/Card';
import Tabs from '../../components/layout/Tabs';

// Styles
import styles from './styles'

const HomeScreen = ({ navigation }) => {

    const cards = [
        {
            id: 1,
            title: 'Little Ladies',
            content: 'Our best collection for your little princess',
            image: require('../../assets/images/baby_girl.png'),
            background: require('../../assets/backgrounds/pink-orange.png'),
            textColor: '#FFF'
        },
        {
            id: 2,
            title: 'Baby Boys',
            content: 'Anything he needs to grow big and strong. Are you sure this card is long enough?',
            image: require('../../assets/images/baby_boy.png'),
            background: require('../../assets/backgrounds/blue.png'),
            textColor: '#FFF'
        },
        {
            id: 3,
            title: "Yummy Mummy's",
            content: 'Glowing and fashionable, all for you',
            image: require('../../assets/images/pregnant.png'),
            background: require('../../assets/backgrounds/teal.png'),
            textColor: '#FFF'
        },
        {
            id: 4,
            title: 'The Big Guns',
            content: 'Cribs, buggies, Car Seats, you name it!',
            background: require('../../assets/backgrounds/rainbow.png'),
            textColor: '#FFF'
        },
        {
            id: 5,
            title: 'Little Ladies',
            content: 'Our best collection for your little princess',
            image: require('../../assets/images/baby_girl.png'),
            background: require('../../assets/backgrounds/pink-orange.png'),
            textColor: '#FFF'
        },
        {
            id: 6,
            title: 'Baby Boys',
            content: 'Anything he needs to grow big and strong. Are you sure this card is long enough?',
            image: require('../../assets/images/baby_boy.png'),
            background: require('../../assets/backgrounds/blue.png'),
            textColor: '#FFF'
        },
        {
            id: 7,
            title: "Yummy Mummy's",
            content: 'Glowing and fashionable, all for you',
            image: require('../../assets/images/pregnant.png'),
            background: require('../../assets/backgrounds/teal.png'),
            textColor: '#FFF'
        },
        {
            id: 8,
            title: 'The Big Guns',
            content: 'Cribs, buggies, Car Seats, you name it!',
            background: require('../../assets/backgrounds/rainbow.png'),
            textColor: '#FFF'
        }
    ]

    const header = {
        title: 'Unicorn Baby',
        subtitle: 'Some cool subtitle here'
    }

    const handleRouteChange = () => {
        navigation.navigate('Category')
    }

    return (
        <Background>
            <Header
                title={header.title}
                subtitle={header.subtitle}
                image={require('../../assets/images/header.jpg')} />
            <Searchbar />
            <ScrollView>
                <Container>
                    <View style={styles.productGrid}>
                        {cards.map((card, i) => {
                            return (
                                <TouchableOpacity key={i} onPress={handleRouteChange}>
                                    <Card card={card} />
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </Container>
            </ScrollView>
            <Tabs />
        </Background>
    )
}

export default HomeScreen