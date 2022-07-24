import { View, Text } from 'react-native'

// Components
import IconTooltip from '../IconTooltip';

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// Styles
import styles from './styles'

const ProductIcons = () => {

    const iconColor = '#28cfb3'

    const productInfo = [
        {
            id: 1,
            tooltip: 'Wash at 30degrees maximum',
            icon: <MaterialCommunityIcons name="washing-machine" size={24} color={iconColor} />
        },
        {
            id: 2,
            tooltip: 'This item cannot be ironed',
            icon: <MaterialCommunityIcons name="iron-outline" size={24} color={iconColor} />
        },
        {
            id: 3,
            tooltip: '30% cotton, 70% polyester',
            icon: <Ionicons name="shirt-outline" size={24} color={iconColor} />
        },
        {
            id: 4,
            tooltip: 'Available sizes: S, M, L, XL',
            icon: <MaterialCommunityIcons name="size-m" size={24} color={iconColor} />
        },
        {
            id: 5,
            tooltip: 'This item can be returned free of charge within 7 days',
            icon: <MaterialCommunityIcons name="phone-return" size={24} color={iconColor} />
        },
        {
            id: 6,
            tooltip: 'This item is certified sustainable',
            icon: <Ionicons name="earth" size={24} color={iconColor} />
        }
    ]



    return (
        <View style={styles.grid}>
            {productInfo.map((icon, i) => {
                return <IconTooltip key={i} icon={icon.icon} tooltip={icon.tooltip} />
            })}
        </View>
    )
}

export default ProductIcons