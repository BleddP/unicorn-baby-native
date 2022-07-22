import React from 'react'
import { ImageBackground } from 'react-native'

// Styles
import styles from './styles'

interface Props {
    children: any
}

const Background: React.FC<Props> = ({ children }) => {

    return (
        <ImageBackground
            style={styles.background}
            source={require('../../../assets/images/background.png')}
            resizeMode='cover'
        >
            {children}
        </ImageBackground>
    )
}

export default Background