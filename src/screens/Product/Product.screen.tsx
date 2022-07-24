import { useContext } from "react"
import { ScrollView, View } from "react-native"

// Layout
import Background from "../../components/layout/Background"
import Container from "../../components/layout/Container"

// Typography
import { H1, H2, H4, Paragraph, Small } from "../../components/typography"

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
                </Container>
                <Caroussel />
                <Container padding>
                    <View style={styles.heading}>
                        <View style={styles.actions}>
                            <LikeItem />
                            <AddToCart />
                            <Share />
                        </View>
                        <H1 style={styles.priceTag}>NT$ 349</H1>
                    </View>
                    <Button title="Add to cart" onPress={handleAddToCart} />
                    <View>
                        <H2>Playground stunner</H2>
                        <Paragraph>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil modi, eum perspiciatis doloremque consequuntur veritatis! Iusto quam fugit esse facere. Tempora autem, maxime fugiat pariatur minima debitis quibusdam excepturi amet voluptatum ducimus sed vel nam nobis repellat laborum, dolorum numquam ab eveniet ullam! Repudiandae, temporibus porro nisi iure tempora tempore.
                        </Paragraph>
                        <Paragraph>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ipsum laboriosam temporibus corporis quos modi optio aliquam impedit, necessitatibus, quaerat vitae. Quam vero cumque nemo.
                        </Paragraph>
                    </View>
                    <View>
                        <H2>Materials</H2>
                        <ProductIcons />
                    </View>
                    <Button title="Add to cart" onPress={handleAddToCart} />
                    <View>
                        <H4>Terms & Conditions</H4>
                        <Small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur illum consectetur iure reiciendis quae iusto nostrum soluta numquam, recusandae nam aspernatur dicta fugiat rerum fuga. Minus consectetur, magni quaerat, veniam culpa accusantium doloribus id vel ab nobis mollitia nulla ipsa, quas architecto natus reprehenderit ipsum esse maiores. Voluptatibus suscipit aliquam, aut facilis modi blanditiis deleniti fugit natus dignissimos similique tenetur omnis excepturi, quis eaque. Dolor harum, laudantium quasi in illum cupiditate, animi tenetur facilis nisi fugiat aperiam inventore rem consequatur tempora iure! Incidunt modi quisquam eum. Nemo ipsum fugit totam, repellendus sunt laboriosam pariatur provident beatae! Excepturi iste pariatur doloremque?</Small>
                    </View>
                </Container>
            </ScrollView>
        </Background>
    )
}

export default ProductScreen