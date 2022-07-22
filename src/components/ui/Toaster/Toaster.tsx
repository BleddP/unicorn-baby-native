import { useRef, useEffect, useContext } from 'react'
import { Animated, Easing, View, ImageBackground } from 'react-native'

// Components
import Container from '../../layout/Container'
import { H4 } from '../../typography'

// Store
import toasterContext from '../../../store/toaster/toasterContext'

// Styles
import styles from './styles'

const Toaster = () => {
    const { open, content } = useContext(toasterContext)

    // Animations
    const scrollY = useRef(new Animated.Value(48)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (open) {
            Animated.timing(opacity, {
                toValue: 1,
                duration: 350,
                useNativeDriver: true
            }).start()
            Animated.timing(scrollY, {
                toValue: 0,
                duration: 750,
                easing: Easing.elastic(5),
                useNativeDriver: true
            }).start()
        } else {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 350,
                useNativeDriver: true
            }).start()
            Animated.timing(scrollY, {
                toValue: 48,
                duration: 350,
                useNativeDriver: true
            }).start()
        }
    }, [open])

    return (
        <Animated.View
            style={{
                opacity,
                transform: [{ translateY: scrollY }]
            }}
        >
            <Container>
                <View style={styles.toaster}>
                    <ImageBackground style={styles.background} source={require('../../../assets/backgrounds/pink-orange.png')} imageStyle={{ borderRadius: 15 }}>
                        {typeof content === 'string' ? (
                            <H4 style={styles.text} color="#FFF">{content}</H4>
                        ) : (content)}
                    </ImageBackground>
                </View>
            </Container>
        </Animated.View>
    )
}

export default Toaster