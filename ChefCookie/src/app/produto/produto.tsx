import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Link } from "expo-router";
import styles from "./styles";

export default function ProdutoPage() {
    return (
        <View style={styles.container}>
            {/* Produto */}
            <ScrollView contentContainerStyle={styles.content}>
                {/* Avaliação com estrelas */}
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingStar}>★★★★★</Text>
                </View>
                
                <Image
                    style={styles.productImage}
                    source={require("@/assets/images/cookie-nutella.jpg")}
                />
                <Text style={styles.productName}>Cookie de Nutella</Text>
                <Text style={styles.productDescription}>
                    Cookie tradicional com recheio de Nutella. Uma explosão de sabor para os amantes de chocolate!
                </Text>
                <Text style={styles.productPrice}>R$ 25,00</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Comprar Agora</Text>
                </TouchableOpacity>

                <Link href="/home/page-home" asChild>
                    <TouchableOpacity style={styles.linkButton}>
                        <Text style={styles.linkText}>Voltar para o Menu</Text>
                    </TouchableOpacity>
                </Link>
            </ScrollView>
        </View>
    );
}