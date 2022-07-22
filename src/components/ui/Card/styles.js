import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        height: 'auto',
        width: 165,
        marginBottom: 12,
        borderRadius: 15,
        elevation: 20,
        shadowColor: '#52006A',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    solid: {
        backgroundColor: "#FFF"
    }, 
    content: {
        padding: 12,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 120,
        marginBottom: 6,
        resizeMode: 'contain',
        transform: [{translateX: -50}, {translateY: 12}]
    }
})

export default styles