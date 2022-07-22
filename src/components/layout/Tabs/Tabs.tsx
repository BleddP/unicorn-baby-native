import { View, Text } from 'react-native'

// Icons
import { AntDesign } from '@expo/vector-icons';

// Styles
import styles from './styles'

const Tabs = () => {

    const iconColor = '#e88fdf'

    const nav = [
        {
            id: 1,
            text: 'Tab 1',
            icon: <AntDesign name="home" size={24} color={iconColor} />
        },
        {
            id: 2,
            icon: <AntDesign name="hearto" size={24} color={iconColor} />
        },
        {
            id: 3,
            icon: <AntDesign name="user" size={24} color={iconColor} />
        },
        {
            id: 4,
            icon: <AntDesign name="shoppingcart" size={24} color={iconColor} />
        },
        {
            id: 5,
            icon: <AntDesign name="phone" size={24} color={iconColor} />
        },
    ]

    return (
        <View style={styles.tabs}>
            {nav.map((tab, i) => (
                <View key={i} >
                    {tab.icon}
                </View>
            ))}

        </View>
    )
}

export default Tabs