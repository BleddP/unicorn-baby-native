import { ScrollView } from "react-native"

// Layout
import Background from "../../components/layout/Background"
import Container from "../../components/layout/Container"

// Components
import { H1 } from "../../components/typography"

const ProductScreen = () => {
    return (
        <Background>
            <ScrollView>
                <Container padding>
                    <H1>Ponderosa girl dress</H1>
                </Container>
            </ScrollView>
        </Background>
    )
}

export default ProductScreen