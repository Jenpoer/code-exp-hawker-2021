import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function IncDecButton({ onPress, character }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.circle}>
      <Text style={styles.char}>{character}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    backgroundColor: "#DA5F5A",
    borderRadius: "50%",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  char: {
    fontSize: 20,
    fontStyle: "bold",
    color: "white",
  },
});
