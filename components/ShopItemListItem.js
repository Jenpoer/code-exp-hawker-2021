import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTag, faStar } from "@fortawesome/free-solid-svg-icons";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

export default function ShopItemListItem({ name, price }) {
  let [fontsLoaded] = useFonts({
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.healthhub.sg/sites/assets/Assets/Categories/Pregnancy/Article008_images_mainimage.jpg",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
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
    width: "40%",
    borderRadius: "10%",
    overflow: "hidden",
  },
  image: {
    contentFit: "cover",
    width: "100%",
    paddingTop: "100%",
  },
  textContainer: {
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
