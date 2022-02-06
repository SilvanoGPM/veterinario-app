import { View, TouchableOpacity, Text } from "react-native";

import BackIcon from "../../assets/back.svg";
import NotificationIcon from "../../assets/notification.svg";
import AllRecordIcon from "../../assets/all-record.svg";
import NewRecordIcon from "../../assets/new-record.svg";
import ProfileIcon from "../../assets/profile.svg";

import styles from "./styles";

export function Home({ navigation }) {
  function goBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.icon} onPress={goBack}>
          <BackIcon />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <NotificationIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={{ marginBottom: 20 }}>
          <View style={styles.action}>
            <NewRecordIcon height={100} width={100} />
            <Text style={styles.actionText}>Novo registro</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.action}>
            <AllRecordIcon height={100} width={100} />
            <Text style={styles.actionText}>Todos os registros</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.profile}>
        <ProfileIcon height={30} width={30} />
        <Text style={styles.profileText}>Perfil</Text>
      </View>
    </View>
  );
}
