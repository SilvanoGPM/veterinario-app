import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "10%",
    paddingHorizontal: "6%",
    backgroundColor: "#FFFFFF",
  },

  title: {
    color: "#FF5A5A",
    fontSize: 40,
    fontWeight: "bold",
  },

  welcome: {
    color: "#7B7B7B",
    fontSize: 15,
    fontWeight: "bold",
  },

  switches: {
    marginTop: 40,
    padding: 10,
    flexDirection: "row",
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 10,
  },

  switch: {
    flex: 1,
    width: "50%",
    height: "100%",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
  },

  switchText: {
    color: "#7B7B7B",
  },

  switchActiveText: {
    color: "#FFFFFF",
  },

  switchActive: {
    backgroundColor: "#7B7B7B",
  },

  inputs: {
    paddingHorizontal: "3%",
    marginTop: 20,
  },

  inputGroup: {
    marginTop: 20,
  },

  inputLabel: {
    color: "#DB2A2A",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },

  input: {
    borderRadius: 10,
    borderColor: "#707070",
    borderWidth: 1,
    padding: "3%",
  },

  notAccess: {
    flexDirection: "row",
    marginTop: 10,
  },

  notAccessText: {
    fontSize: 13,
    fontWeight: "bold",
    fontSize: 13,
    color: "#A5A2A2",
  },

  notAccessClick: {
    fontSize: 13,
    marginLeft: 5,
    color: "#FF5A5A",
  },

  loginContainer: {
    marginTop: 70,
    alignItems: "center",
  },

  loginButton: {
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    width: 215,
    alignItems: "center",
  },

  loginText: {
    color: "#FF5A5A",
    fontSize: 27,
  },
});

export default styles;
