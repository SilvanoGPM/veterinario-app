import {
  ScrollView,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import CreateRecordIcon from "../../assets/create-record.svg";

import styles from "./styles";

export function NewRecord({ navigation }) {
  function handleCreate() {
    navigation.navigate('Home');
  }
  
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Informações gerais</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Nome do tutor:</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={[{ flexDirection: "row" }, styles.inputGroup]}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.inputLabel}>Tipo do caso:</Text>
              <TextInput style={styles.input} />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.inputLabel}>Tempo de surgimento:</Text>
              <TextInput style={styles.input} />
            </View>
          </View>

          <View style={[{ flexDirection: "row" }, styles.inputGroup]}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.inputLabel}>Procurou atendimento?</Text>
              <View style={styles.radioGroup}>
                <View style={styles.radioContent}>
                  <View style={styles.radio} />
                  <Text style={styles.radioLabel}>Sim</Text>
                </View>

                <View style={styles.radioContent}>
                  <View style={styles.radio} />
                  <Text style={styles.radioLabel}>Não</Text>
                </View>
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.inputLabel}>Contato:</Text>
              <TextInput style={styles.input} />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Sintomas</Text>
          <View style={{ height: 100 }}>
            <TextInput multiline style={styles.input} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Localização</Text>

          <View style={styles.map}>
            <Image
              style={{ width: "100%" }}
              source={require("../../assets/map-placeholder.png")}
            />
          </View>
        </View>

        <TouchableOpacity onPress={handleCreate} style={styles.createRecordButton}>
          <View style={styles.createRecordIcon}>
            <CreateRecordIcon height={50} width={50} stroke="red" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
