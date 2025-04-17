import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF9F5",
        justifyContent: "center", 
        alignItems: "center", 
    },
    content: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        padding: 20,
    },
    ratingContainer: {
        marginBottom: 10,
    },
    ratingStar: {
        fontSize: 35,
        paddingBottom: 30,
        color: "#FFD700", 
        textAlign: "center",
    },
    productImage: {
        width: 200,
        height: 200,
        borderRadius: 100, 
        marginBottom: 20,
    },
    productName: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#651b19",
        marginBottom: 10,
        textAlign: "center",
    },
    productDescription: {
        fontSize: 16,
        color: "#5C2C2A",
        textAlign: "center",
        marginBottom: 20,
    },
    productPrice: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#742524",
        marginBottom: 20,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#742524",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        marginBottom: 20,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    linkButton: {
        marginTop: 10,
    },
    linkText: {
        color: "#742524",
        fontSize: 16,
        textDecorationLine: "underline",
        textAlign: "center",
    },
});

export default styles;