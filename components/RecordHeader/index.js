import { View, TouchableOpacity, Text } from "react-native";

import BackIcon from "../../assets/back.svg";

import styles from "./styles";

export function RecordHeader({ navigation, options }) {
  function goBack() {
    navigation.goBack();
  }
  
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goBack}>
        <BackIcon stroke="#ffffff" width={30} height={30} />
      </TouchableOpacity>

      <Text style={styles.title}>{options.headerTitle}</Text>
    </View>
  );
}
