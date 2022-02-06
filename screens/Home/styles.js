import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },

  icon: {
    width: 38,
    height: 38,
  },

  actions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  action: {
    width: 200,
    height: 200,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 3,
  },

  actionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF5A5A",
    marginTop: 10,
  },

  profile: {
    height: 76,
    borderWidth: 1,
    borderColor: "#7B7B7B",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  profileText: {
    color: "#7B7B7B",
    fontSize: 12,
    marginTop: 5,
  },

  notifications: {
    flex: 1,
    backgroundColor: "rgba(27, 27, 27, 0.41)",
    alignItems: "center",
    paddingTop: 60,
  },

  notificationsContent: {
    backgroundColor: "#FFFFFF",
    width: 220,
    height: 160,
    padding: 10,
    borderRadius: 10,
  },

  notificationsText: {
    color: "#FF5A5A",
    fontSize: 12,
    borderBottomColor: "#7B7B7B",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },

  bellShow: {
    backgroundColor: "#FFFFFF",
    width: 48,
    height: 48,
    borderRadius: 24,
    position: "absolute",
    top: 20,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  corner: {
    top: 55,
    right: 61,
    position: "absolute",
  },
});

export default styles;
