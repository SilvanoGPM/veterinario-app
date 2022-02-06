import { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import styles from "./styles";

export function Login() {
  const [selectedCPF, setSelectedCPF] = useState(true);

  function selectCPF() {
    setSelectedCPF(true);
  }

  function selectEmail() {
    setSelectedCPF(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.welcome}>Olá, bem vindo de volta</Text>

      <View style={styles.switches}>
        <TouchableOpacity
          onPress={selectEmail}
          style={[
            ...(!selectedCPF ? [styles.switchActive] : []),
            styles.switch,
          ]}
        >
          <Text
            style={!selectedCPF ? styles.switchActiveText : styles.switchText}
          >
            E-mail
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={selectCPF}
          style={[...(selectedCPF ? [styles.switchActive] : []), styles.switch]}
        >
          <Text
            style={selectedCPF ? styles.switchActiveText : styles.switchText}
          >
            CPF
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputs}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>
            {selectedCPF ? "CPF" : "E-mail"}:
          </Text>
          <TextInput
            style={styles.input}
            placeholder={`Insira seu ${selectedCPF ? "CPF" : "E-mail"}:`}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Senha:</Text>
          <TextInput style={styles.input} placeholder="Insira sua senha:" />
        </View>

        <View style={styles.notAccess}>
          <Text style={styles.notAccessText}>
            Seu acesso ainda não foi liberado?
          </Text>
          <Text style={styles.notAccessClick}>Clique aqui</Text>
        </View>
      </View>

      <View style={styles.loginContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
