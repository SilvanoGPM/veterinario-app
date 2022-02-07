import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  card: {
    margin: "5%",
    padding: 10,
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "#999",
    backgroundColor: "#FFF",
    elevation: 10,
    marginBottom: 40,
  },

  cardTitle: {
    fontSize: 17,
    color: "#7B7B7B",
    fontWeight: "bold",
    marginBottom: 10,
  },

  inputGroup: {
    width: "100%",
    marginBottom: 15,
  },

  inputLabel: {
    marginBottom: 5,
    fontSize: 13,
    fontWeight: "bold",
    color: "#7B7B7B",
  },

  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    flex: 1,
  },

  radioGroup: {
    flex: 1,
    flexDirection: "row",
  },

  radioContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  radioLabel: {
    marginLeft: 5,
    color: "#7B7B7B",
    fontSize: 13,
  },

  radio: {
    height: 18,
    width: 18,
    borderWidth: 1,
    borderColor: "#7B7B7B",
    borderRadius: 10,
  },

  createRecordButton: {
    width: "100%",
    alignItems: "flex-end",
    marginLeft: -20,
    marginBottom: 30,
  },

  createRecordIcon: {
    padding: 10,
    backgroundColor: "#FFF",
    elevation: 10,
    borderRadius: 100,
  },
});

export default styles;
