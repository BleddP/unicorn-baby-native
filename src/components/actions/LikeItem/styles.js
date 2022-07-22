import { StyleSheet } from "react-native";
import { boxShadow } from "../../../styles";

const styles = StyleSheet.create({
    button: {
        margin: 6,
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        backgroundColor: '#F6F6F6',
        ...boxShadow
    },
    popup: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    popupText: {
        marginLeft: 12,
        marginBottom: 0
    }
})

export default styles