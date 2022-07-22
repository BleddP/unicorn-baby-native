import { ImageBackground } from "react-native"

// Components
import Container from "../Container"

// Typography
import { H1, H2 } from "../../typography"

// Styles
import styles from './styles'

interface Props {
    title: string,
    subtitle?: string,
    image: any
}

const Header: React.FC<Props> = ({ title, subtitle, image }) => {
    return (
        <ImageBackground style={styles.header} source={image}>
            <Container style={styles.container}>
                <H1 color="#FFF" style={styles.h1}>{title}</H1>
                {subtitle && <H2 color="#FFF" style={styles.h1}>{subtitle}</H2>}
            </Container>
        </ImageBackground>
    )
}

export default Header