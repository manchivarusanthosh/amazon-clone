import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    marginVertical: 10,
  },
  pickerStyles: {
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    padding: 5,
    marginVertical: 5,
    height: 40,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 2,
  },
  errorLabel: {
    color: "red",
  },
});

export default styles;
