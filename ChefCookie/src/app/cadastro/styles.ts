import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
        backgroundColor: "#FFF9F5", 
    },
    campos: {
        backgroundColor: "#FFF", 
        borderRadius: 5,
        padding: 20,
        height: 550,
        width: "90%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    },
    title: {
        fontSize: 30,
        fontFamily: "PlayfairDisplay-Bold", 
        color: "#742524", 
        letterSpacing: 0.5,
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 0, 
        borderRadius: 0, 
        paddingHorizontal: 0, 
        marginBottom: 20,
        backgroundColor: "transparent",
        borderBottomWidth: 2,
        borderBottomColor: "#D4A59A",
        color: "#5C2C2A", 
        fontSize: 17,
        fontFamily: "Lato-Regular", 
    },
    button: {
        width: "100%",
        height: 45,
        backgroundColor: "#742524", 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50, 
        marginTop: 15,
        elevation: 0, 
    },
    buttonText: {
        color: "#FFE8E2", 
        fontSize: 18,
        fontFamily: "Lato-Bold",
        letterSpacing: 1,
    },
});

export default styles;