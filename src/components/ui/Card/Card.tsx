import { ImageBackground, Image, View } from 'react-native'

// Components
import { H2, H4 } from '../../typography'

// Styles
import styles from './styles'

const ImageWrapper = ({ children, image }) => {
    return (
        <View style={styles.card}>
            <ImageBackground
                source={image}
                imageStyle={{ borderRadius: 15 }}
            >
                {children}
            </ImageBackground>
        </View>
    )
}



const Card = ({ card }) => {
    const { background, title, image, content, textColor } = card

    if (background) {
        return (
            <ImageWrapper image={background}>
                <View style={styles.content}>
                    <H2 color={textColor}>{title}</H2>
                    {image && <Image source={image} resizeMode='contain' style={styles.image} />}
                    <H4 color={textColor}>{content}</H4>
                </View>
            </ImageWrapper>
        )
    }

    return (
        <View style={[styles.card, styles.solid]}>
            <View style={styles.content}>
                <H2 color={textColor}>{title}</H2>
                {image && <Image source={image} resizeMode='contain' style={styles.image} />}
                <H4 color={textColor}>{content}</H4>
            </View>
        </View>
    )
}

export default Card