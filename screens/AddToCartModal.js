import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
        <Text style={styles.preference}>Good chicken rice as usual</Text>
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
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100%",
  },
  container: {
    display: "flex",
    marginTop: "auto",
    boxShadow: "0 -1px 10px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#304057",
  },
  image: {
    width: "100%",
    flex: 1,
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
    flex: 1,
    flexBasis: "50%",
    paddingTop: 5,
  },
  right: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
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
  preference: {
    padding: 2,
    fontSize: 13,
    color: "#FEFDFB",
    alignSelf: "center",
  },
  price: {
    fontSize: 24,
    lineHeight: "120%",
    color: "#FEFDFB",
    padding: 10,
  },
  icon: {
    size: 13,
    color: "#FEFDFB",
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
});
