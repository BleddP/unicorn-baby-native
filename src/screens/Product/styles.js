import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    heading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
    },
    priceTag: {
        marginBottom: 0
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})

export default styles