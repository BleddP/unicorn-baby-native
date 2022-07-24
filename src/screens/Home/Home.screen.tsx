import { TouchableOpacity, View, ScrollView, Image } from 'react-native';

// Layout
import Container from '../../components/layout/Container';
import Background from '../../components/layout/Background';
import Header from '../../components/layout/Header';
import Searchbar from '../../components/ui/Searchbar';
import Card from '../../components/ui/Card';
import Tabs from '../../components/layout/Tabs';

// Typography
import { H2, Paragraph } from '../../components/typography';

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
            id: 3,
            title: "Yummy Mummy's",
            content: 'Because nothing is more important than a happy mummy. Happy wife, happy life.',
            image: require('../../assets/images/pregnant.png'),
            background: require('../../assets/backgrounds/rainbow.png'),
            textColor: '#FFF'
        },
        {
            id: 2,
            title: 'Baby Boys',
            content: 'Anything he needs to grow big and strong, fit and healthy, perfect for the little guy!',
            image: require('../../assets/images/baby_boy.png'),
            background: require('../../assets/backgrounds/blue.png'),
            textColor: '#FFF'
        },
        {
            id: 4,
            title: 'Making life easier',
            content: 'Cribs, buggies, Car Seats, you name it!',
            image: require('../../assets/images/buggy.png'),
            background: require('../../assets/backgrounds/teal.png'),
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
            <ScrollView style={{ flex: 1 }}>
                <Container>
                    <View style={styles.productGrid}>
                        {cards.map((card, i) => {
                            return (
                                <TouchableOpacity key={i} onPress={handleRouteChange} style={styles.card}>
                                    <Card card={card} />
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <View>
                        <H2>About Unicorn Baby</H2>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptates iure ut voluptatem obcaecati voluptate eum cum quibusdam dolorum modi.</Paragraph>
                        <Paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste voluptates iure ut voluptatem obcaecati voluptate eum cum quibusdam dolorum modi.</Paragraph>
                        <View style={styles.imageShadow}>
                            <Image source={require('../../assets/images/tiff.jpeg')} style={styles.founderImage} />
                        </View>
                    </View>
                </Container>
            </ScrollView>
            <Tabs />
        </Background>
    )
}

export default HomeScreen