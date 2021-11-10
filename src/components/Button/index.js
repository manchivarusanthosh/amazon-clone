import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const Button = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[styles.root, props.containerStyles]}
    >
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#f9b45a",
    marginVertical: 10,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ae5e1b",
  },
  text: {
    fontSize: 16,
  },
});

export default Button;
