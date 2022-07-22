import { ImageBackground } from "react-native"

// Components
import Container from "../Container"

// Typography
import { H1, H2 } from "../../typography"

// Styles
import styles from './styles'

const Header = ({ image }) => {
    return (
        <ImageBackground style={styles.header} source={image}>
            <Container style={styles.container}>
                <H1 color="#FFF">Header</H1>
                <H2 color="#FFF">Cool sub-header over here!</H2>
            </Container>
        </ImageBackground>
    )
}

export default Header