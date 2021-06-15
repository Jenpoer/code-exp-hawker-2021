import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import IncDecButton from "../components/IncDecButton";

export default function AddToCartModal() {
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.healthhub.sg/sites/assets/Assets/Categories/Pregnancy/Article008_images_mainimage.jpg",
          }}
        />
        <Text style={styles.title}>Chicken Rice</Text>
        <Text style={styles.caption}>Good chicken rice as usual</Text>
        <View style={styles.columns}>
          <View style={styles.left}>
            <Text style={styles.price}>$2.50</Text>
          </View>
          <View style={styles.right}>
            <IncDecButton character="-" />
            <Text style={styles.price}>1</Text>
            <IncDecButton character="+" />
          </View>
        </View>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.buttonText}>CONFIRM PAYMENT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  },
  container: {
    display: "flex",
    boxShadow: "0 -1px 10px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#304057",
  },
  image: {
    width: "100%",
    alignSelf: "center",
    paddingTop: "calc(160/325 * 100%)",
  },
  columns: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
  },
  left: {
    flexBasis: "50%",
    paddingTop: 5,
  },
  right: {
    display: "flex",
    flexDirection: "row",
    flexBasis: "50%",
    paddingTop: 5,
  },
  addressContainer: {
    display: "flex",
    flexDirection: "row",
  },
  address: {
    fontSize: 13,
    padding: 2,
    color: "#FEFDFB",
  },
  title: {
    fontSize: 24,
    lineHeight: "120%",
    color: "#FEFDFB",
    alignSelf: "center",
    padding: 5,
  },
  price: {
    fontSize: 24,
    lineHeight: "120%",
    color: "#FEFDFB",
    padding: 10,
  },
  confirmButton: {
    backgroundColor: "rgba(225, 130, 76, 1)",
    alignItems: "center",
    padding: 18,
    marginTop: 12,
    marginBottom: 36,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: "tomato",
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
  caption: {
    color: "white",
    alignSelf: "center",
  },
});
