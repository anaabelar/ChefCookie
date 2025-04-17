import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import styles from "./login/styles";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = () => {
        console.log("E-mail:", email);
        console.log("Senha:", senha);
    };

    return (
        <View style={styles.container}>
            {/* Logo Section */}
            <View style={styles.logoContainer}>
                <View style={styles.logoBackground}>
                    <Image
                        style={styles.logoImage}
                        source={require("@/assets/images/logo-ChefCookie.png")}
                    />
                    <Text style={styles.logoText}>Chef Cookie</Text>
                </View>
            </View>

            
            <View style={styles.campos}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />

                <Link href={"/home/page-home"} asChild>
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </Link>

                <Link href={"/cadastro/page"} asChild>
                    <TouchableOpacity style={styles.linkButton}>
                        <Text style={styles.linkText}>Cadastre-se aqui!</Text>
                    </TouchableOpacity>
                </Link>

                
            </View>
        </View>
    );
}