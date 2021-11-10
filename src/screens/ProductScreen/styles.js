import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  title: {
    // paddingTop: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: "normal",
    textDecorationLine: "line-through",
  },
  description: {
    marginVertical: 10,
    lineHeight: 25,
  },
});

export default styles;
