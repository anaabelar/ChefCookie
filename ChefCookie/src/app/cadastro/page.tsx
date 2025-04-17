import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "./styles";
import { Link } from "expo-router";

export default function CadastroPage() {
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    const handleCadastro = () => {
        if (!cpf || !name || !email || !senha || !dataNascimento) {
            console.log("Por favor, preencha todos os campos.");
            return;
        }
        console.log("CPF:", cpf);
        console.log("Nome:", name);
        console.log("E-mail:", email);
        console.log("Senha:", senha);
        console.log("Data de Nascimento:", dataNascimento);
    };

    return (
        <View style={styles.container}>
            <View style={styles.campos}>
                <Text style={styles.title}>Cadastro</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Data de Nascimento:"
                    value={dataNascimento}
                    onChangeText={setDataNascimento}
                />
                <TextInput
                    style={styles.input}
                    placeholder="CPF:"
                    keyboardType="numeric"
                    value={cpf}
                    onChangeText={setCpf}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nome:"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail:"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha:"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />

                <Link href={"/home/page-home"} asChild>
                    <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </Link>

            </View>
        </View>
    );
}