import { useContext } from "react"
import { ScrollView, View } from "react-native"

// Layout
import Background from "../../components/layout/Background"
import Container from "../../components/layout/Container"

// Typography
import { H1, H2, Paragraph } from "../../components/typography"

// Components
import Caroussel from "../../components/ui/Caroussel"
import ProductIcons from "../../components/ui/ProductIcons"
import LikeItem from "../../components/actions/LikeItem"
import AddToCart from "../../components/actions/AddToCart"
import Share from "../../components/actions/Share/Share"
import Button from "../../components/ui/Button"

// Store
import toasterContext from "../../store/toaster/toasterContext"

// Styles
import styles from './styles'

const ProductScreen = () => {

    const { newToaster } = useContext(toasterContext)

    const handleAddToCart = () => {
        newToaster('Item added to cart!', 3000)
    }

    return (
        <Background>
            <ScrollView>
                <Container padding>
                    <H1>Ponderosa girl dress</H1>
                    <View style={styles.actions}>
                        <Share />
                        <LikeItem />
                        <AddToCart />
                    </View>
                </Container>
                <Caroussel />
                <Container padding>
                    <H2>Playground stunner</H2>
                    <Paragraph>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil modi, eum perspiciatis doloremque consequuntur veritatis! Iusto quam fugit esse facere. Tempora autem, maxime fugiat pariatur minima debitis quibusdam excepturi amet voluptatum ducimus sed vel nam nobis repellat laborum, dolorum numquam ab eveniet ullam! Repudiandae, temporibus porro nisi iure tempora tempore.
                    </Paragraph>
                    <Button title="Add to cart" onPress={handleAddToCart} />
                    <H2>Materials</H2>
                    <ProductIcons />
                </Container>
            </ScrollView>
        </Background>
    )
}

export default ProductScreen