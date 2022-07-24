import { StyleSheet } from "react-native";
import { boxShadow } from "../../styles";

const styles = StyleSheet.create({
    productGrid: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: 624,
        padding: -12
    },
    card: {
        margin: 6
    },
    imageShadow: {
        ...boxShadow,
        marginBottom: 24,
        marginTop: 24,
    },  
    founderImage: {
        borderRadius: 15,
        width: '100%',
        height: 300,
    }
})

export default styles