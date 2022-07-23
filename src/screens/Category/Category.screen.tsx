import { View, ScrollView, FlatList } from 'react-native';

// Layout
import Container from '../../components/layout/Container';
import Background from '../../components/layout/Background';
import Header from '../../components/layout/Header';
import Tabs from '../../components/layout/Tabs';

// Typography
import { H3 } from '../../components/typography';

// Components
import Button from '../../components/ui/Button';
import Item from '../../components/ui/Item';

const CategoryScreen = ({ navigation }) => {

    const header = {
        title: 'Little Ladies',
        subtitle: 'Girls just wanna have fun',
        image: require('../../assets/backgrounds/pink-orange.png')
    }

    const handleModal = () => {
        console.log('@todo: open modal')
        navigation.navigate("Modal")
    }

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
                        <Button title="Open filters" onPress={handleModal} />
                    </View>
                    <View>
                        <H3>Onesies</H3>
                        <FlatList
                            data={array}
                            horizontal
                            initialNumToRender={5}
                            keyExtractor={(item: any, index: number) => index.toString()}
                            renderItem={({ item, index }) => {
                                return <Item key={index} item={item} />
                            }}
                        />
                    </View>
                    <View>
                        <H3>Dresses</H3>
                        <FlatList
                            data={array}
                            horizontal
                            initialNumToRender={5}
                            keyExtractor={(item: any, index: number) => index.toString()}
                            renderItem={({ item, index }) => {
                                return <Item key={index} item={item} />
                            }}
                        />
                    </View>
                    <View>
                        <H3>Shirts</H3>
                        <FlatList
                            data={array}
                            horizontal
                            initialNumToRender={5}
                            keyExtractor={(item: any, index: number) => index.toString()}
                            renderItem={({ item, index }) => {
                                return <Item key={index} item={item} />
                            }}
                        />
                    </View>
                    <View>
                        <H3>Trousers</H3>
                        <FlatList
                            data={array}
                            horizontal
                            initialNumToRender={5}
                            keyExtractor={(item: any, index: number) => index.toString()}
                            renderItem={({ item, index }) => {
                                return <Item key={index} item={item} />
                            }}
                        />
                    </View>
                    <View>
                        <H3>Hats</H3>
                        <FlatList
                            data={array}
                            horizontal
                            initialNumToRender={5}
                            keyExtractor={(item: any, index: number) => index.toString()}
                            renderItem={({ item, index }) => {
                                return <Item key={index} item={item} />
                            }}
                        />
                    </View>
                </Container>
            </ScrollView>
            <Tabs />
        </Background>
    )
}

export default CategoryScreen