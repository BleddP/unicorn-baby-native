import { View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

// Icons
import { AntDesign } from '@expo/vector-icons';

// Styles
import styles from './styles'

interface Tab {
    id: number,
    screen: string,
    icon: any
}

const Tabs: React.FC = () => {

    const navigation = useNavigation()
    const iconColor = '#e88fdf'

    const nav: Tab[] = [
        {
            id: 1,
            screen: 'Home',
            icon: <AntDesign name="home" size={24} color={iconColor} />
        },
        {
            id: 2,
            screen: 'Category',
            icon: <AntDesign name="hearto" size={24} color={iconColor} />
        },
        {
            id: 3,
            screen: 'Product',
            icon: <AntDesign name="user" size={24} color={iconColor} />
        },
        {
            id: 4,
            screen: 'Home',
            icon: <AntDesign name="shoppingcart" size={24} color={iconColor} />
        },
        {
            id: 5,
            screen: 'Home',
            icon: <AntDesign name="phone" size={24} color={iconColor} />
        },
    ]

    const handleRouteChange = (tab: Tab | any) => {
        navigation.navigate(tab.screen)
    }

    return (
        <View style={styles.tabs}>
            {nav.map((tab, i) => (
                <TouchableOpacity onPress={() => handleRouteChange(tab)} key={i} >
                    {tab.icon}
                </TouchableOpacity>
            ))}

        </View>
    )
}

export default Tabs