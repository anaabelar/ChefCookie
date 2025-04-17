import { Image, StyleSheet, Text, Touchable, TouchableOpacity, ScrollView, View } from "react-native";
 import { styles } from "./home"
import { Link } from "expo-router";
 
 
 
 
 
 export default function Index() {
 
     const MENU = [
         {
             id: 1,
             name: "Cookie Tradicional",
             description: "Cookie sabor baunilha com gotas de                  chocolate ao leite",
             price: 19.90,
             image: require("@/assets/images/cookie-tradicional.jpg")
         },
         {
             id: 3,
             name: "Cookie M&Ms",
             description: "Cookie sabor baunilha com m&ms.",
             price: 21.90,
             image: require("@/assets/images/cookie-m&ms.jpg")
         },
         {
             id: 2,
             name: "Cookie Red Velvet",
             description: "Cookie sabor red velvet com gotas de             chocolate branco.",
             price: 25.00,
             image: require("@/assets/images/cookie-RedVelvet.jpg")
         },
     
         {
             id: 4,
             name: "Cookie de Nutella",
             description: "Cookie tradicional com recheio de nutella",
             price: 25.00,
             image: require("@/assets/images/cookie-nutella.jpg")
         }
     ]
 
 
     return (
         <View style={styles.container}>
             <View style={styles.Header}>
                 <Image style={styles.HeaderImage} source={require("@/assets/images/header.png")}></Image>
                 <Text style={styles.restaurantName}>Chef Cookie</Text>
                 <Text style={styles.subtitle}>O Melhor Cookie do Brasil!</Text>
             </View>
 
             <View style={styles.tabs}>
                 {["Cookies", "Bebidas", "Salgados", "Promoções" ].map((item) => (
                     <TouchableOpacity>
                         <Text>{item}</Text>
                     </TouchableOpacity>
                 ))}
             </View>
 
             <ScrollView style={styles.menuList}>
                 {
                     MENU.map((item) => (
                        <Link href={"/produto/produto"} asChild>
                         <TouchableOpacity style={styles.menuItem}>
                             <Image style={styles.itemImage} source={item.image} />
                             <View>
                                 <Text style={styles.itemName}>{item.name}</Text>
                                 <Text style={styles.itemDescription}>{item.description}</Text>
                                 <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                             </View>
                         </TouchableOpacity>
                         </Link>
                     ))
                 }
             </ScrollView>
 
         </View>
     )
 
 }