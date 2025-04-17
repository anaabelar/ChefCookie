
import { StyleSheet } from "react-native";

 
 
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    Header: {
       
    },
    HeaderImage: {
        width: 500,
        height: 350,
        borderRadius: 0
    },
    restaurantName: {
        fontSize: 25,
        marginTop: 15,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
        color: "brown"
 
    },
    subtitle: {
        color: "#666",
        textAlign: "center",
        fontSize: 15,
      
    },
    tabs: {
        flexDirection: "row",
        padding: 16,
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
        gap: 50
    },
    tabsName: {
        color: "#red"
    },
    menuList: {
        padding: 16,
        flex: 1
    },
    menuItem: {
        flexDirection: "row",
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
        textAlign: "center",
        marginTop:10,
        margin: 10
    },
    menuContent: {
        flex: 1,
        marginRight: 16
    },
    itemImage: {
        width: 90,
        height: 90,
        paddingLeft:10,
        paddingRight:10,
        borderRadius: 45
    },
    itemName: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 25,
        color:"#541a19"
    },
    itemDescription: {
        color: "666",
        marginTop: 4,
        fontSize: 13,
        marginLeft: 25,
        margin:10
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 25,
        marginBottom: 25

    }
})