import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTag, faStar } from "@fortawesome/free-solid-svg-icons";
import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";

export default function DoneeShopItemListItem({ name, price, imgSrc, available }) {
  let [fontsLoaded] = useFonts({
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `${imgSrc}`,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>Available: {available}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#304057",
  },
  imageContainer: {
    flex: 4,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    contentFit: "cover",
    width: "100%",
    paddingTop: "100%",
  },
  textContainer: {
    flex: 6,
    margin: 20,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    lineHeight: "120%",
    color: "#FEFDFB",
    fontFamily: "Inter-SemiBold",
  },
  price: {
    padding: 2,
    fontSize: 20,
    color: "#FEFDFB",
    fontFamily: "Inter-SemiBold",
  },
});
