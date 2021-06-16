import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function DoneeConfirmRedeemScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.fillerContainer}></View>
      <View style={styles.titleContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://lh3.googleusercontent.com/proxy/NOcG0vFHwf7j1HXcQ2KkuMlDu1g7_Ln0wN6d4EQEE-A2w6mFm6jFqnEe6So5F7JMaLHB1ZZBmOldxmTtJ0X7k8tBRWLayhI",
          }}
        ></Image>
        <Text style={styles.text}>
          Your meals have been successfully redeemed{" "}
        </Text>
      </View>
      <View style={styles.fillerContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#304055",
  },
  text: {
    fontWeight: "semi-bold",
    fontSize: 35,
    textAlign: "center",
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
});
