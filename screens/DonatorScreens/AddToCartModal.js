import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import IncDecButton from "../../components/IncDecButton";
import firebase from "../../database/firebaseDB";
export default function AddToCartModal({ route, navigation }) {
  const user = firebase.auth().currentUser.uid;
  const db = firebase
    .firestore()
    .collection("userinfo")
    .doc(user)
    .collection("cart");

  const [quantity, setQuantity] = useState(1);
  const [confirmText, setConfirmText] = useState("");

  const {
    shopName,
    hawkerId,
    hawkerName,
    hawkerAddress,
    itemId,
    name,
    description,
    price,
    userData
  } = route.params;


  function addToCart() {
    const order = {
      name: name,
      price: quantity * price,
      quantity: quantity,
    };
    db.doc(itemId).set(order);
    showConfirmation();
  }

  function showConfirmation() {
    clearTimeout(timeoutId);
    setConfirmText("Added to cart!")
    const timeoutId = setTimeout(() => setConfirmText(""), 1500);
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.healthhub.sg/sites/assets/Assets/Categories/Pregnancy/Article008_images_mainimage.jpg",
          }}
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.caption}>{description}</Text>
        <View style={styles.columns}>
          <View style={styles.left}>
            <Text style={styles.price}>${(price * quantity).toFixed(2)}</Text>
          </View>
          <View style={styles.right}>
            <IncDecButton
              character="-"
              onPress={() => {
                if (quantity > 1) setQuantity(quantity - 1);
              }}
            />
            <Text style={styles.price}>{quantity}</Text>
            <IncDecButton
              character="+"
              onPress={() => setQuantity(quantity + 1)}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.confirmButton} onPress={addToCart}>
          <Text style={styles.buttonText}>DONATE</Text>
        </TouchableOpacity>
        <Text style={styles.confirmText}>{confirmText}</Text>
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
    height: "100%",
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
    justifyContent: "center",
  },
  left: {
    flexBasis: "50%",
    paddingTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    display: "flex",
    flexDirection: "row",
    flexBasis: "50%",
    paddingTop: 5,
    justifyContent: "center",
    alignItems: "center",
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
  confirmText: {
    color: "#90ee90",
    alignSelf: "center",
  },
});
