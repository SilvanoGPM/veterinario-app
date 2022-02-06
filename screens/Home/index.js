import { useState } from "react";
import { View, TouchableOpacity, Text, Modal, FlatList } from "react-native";

import BackIcon from "../../assets/back.svg";
import NotificationIcon from "../../assets/notification.svg";
import AllRecordIcon from "../../assets/all-record.svg";
import NewRecordIcon from "../../assets/new-record.svg";
import ProfileIcon from "../../assets/profile.svg";
import ModalCorner from "../../assets/corner.svg";

import styles from "./styles";

export function Home({ navigation }) {
  const [notifications, setNotifications] = useState([
    { id: 1, address: "rua XXX", district: "", number: "" },
    { id: 2, address: "rua XXX", district: "", number: "" },
    { id: 3, address: "rua XXX", district: "", number: "" },
    { id: 4, address: "rua XXX", district: "", number: "" },
  ]);

  const [showNotifications, setShowNotifications] = useState(false);

  function goBack() {
    navigation.goBack();
  }

  function goToNewRecord() {
    navigation.navigate("NewRecord");
  }

  function goToAllRecords() {
    navigation.navigate("AllRecords");
  }

  function toggleShowNotifications() {
    setShowNotifications(!showNotifications);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.icon} onPress={goBack}>
            <BackIcon stroke="#FF5A5A" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleShowNotifications}
            style={styles.icon}
          >
            <NotificationIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={goToNewRecord}
            style={{ marginBottom: 20 }}
          >
            <View style={styles.action}>
              <NewRecordIcon height={100} width={100} />
              <Text style={styles.actionText}>Novo registro</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToAllRecords}>
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

      <Modal
        onRequestClose={toggleShowNotifications}
        visible={showNotifications}
        animationType="fade"
        transparent
      >
        <View style={styles.notifications}>
          <View style={styles.notificationsContent}>
            <FlatList
              keyExtractor={({ id }) => id}
              data={notifications}
              renderItem={({ item: { address, district, number } }) => (
                <Text style={styles.notificationsText}>
                  Endereço {address} - Bairro {district} - N° {number}
                </Text>
              )}
            />
          </View>

          <TouchableOpacity
            onPress={toggleShowNotifications}
            style={styles.bellShow}
          >
            <NotificationIcon width="50%" height="50%" />
          </TouchableOpacity>

          <ModalCorner style={styles.corner} />
        </View>
      </Modal>
    </>
  );
}
