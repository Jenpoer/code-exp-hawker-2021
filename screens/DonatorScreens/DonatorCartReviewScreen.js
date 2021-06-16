import React, { useState, useEffect } from "react";
import {
  Switch,
  View,
  Header,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import deleteCollection from "../../utility/deleteCollection";
import moment from "moment";
import firebase from "../../database/firebaseDB";

export default function DonatorCartReviewScreen({ route, navigation }) {
  const user = firebase.auth().currentUser.uid;
  const db = firebase.firestore().collection("userinfo/" + user + "/cart");
  const db2 = firebase.firestore().collection("userinfo/" + user + "/history");
  const db3 = firebase
    .firestore()
    .collection(
      "hawker/" +
        route.params.hawkerId +
        "/shops/" +
        route.params.shopId +
        "/menu"
    );

  const [cartData, setCartData] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  // Load Firebase data on start
  useEffect(() => {
    const unsubscribe = db.onSnapshot((collection) => {
      const orders = collection.docs.map((doc) => {
        return {
          itemId: doc.id,
          ...doc.data(),
        };
      });

      setCartData(orders);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Update whenever cartData changes
  useEffect(() => {
    setTotalPrice(0);
    cartData.forEach((order) => setTotalPrice(totalPrice + order.price));
  }, [cartData]);

  const { shopId, shopName, imgSrc, hawkerId, hawkerName, hawkerAddress } =
    route.params;

  // Set Date
  useEffect(() => {
    var date = moment().format("MMMM Do YYYY, h:mm a");
    setCurrentDate(date);
  }, []);

  function confirmPayment() {
    // Add all orders into History
    if (cartData.length != 0) {
      db2
        .doc(currentDate)
        .set({ hawkerId: hawkerId, shopId: shopId, items: cartData });
    }

    // Add to "available" field
    cartData.forEach((order) => {
      const increment = firebase.firestore.FieldValue.increment(order.quantity);
      db3.doc(order.itemId).update({ available: increment });
    });

    // Delete all items from cart
    setCartData([]);
    deleteCollection(firebase.firestore(), "userinfo/" + user + "/cart", 5);

    // Navigate to confirm page after a short time out
    clearTimeout(timeoutId);
    const timeoutId = setTimeout(() => {
      navigation.navigate("DonatorConfirmPayment");
    }, 250);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headercontainer}>
        <Text style={styles.header}> Confirmation Page </Text>
      </View>
      <View style={styles.receipt}>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            padding: 10,
            textAlign: "center",
            fontWeight: "Bold",
          }}
        >
          {" "}
          {hawkerName}{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            textAlign: "center",
            padding: 10,
          }}
        >
          {" "}
          {shopName}{" "}
        </Text>
        <View style={styles.separator}></View>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            padding: 5,
            textAlign: "center",
          }}
        >
          {" "}
          {currentDate}{" "}
        </Text>
        <View style={styles.separator}></View>
        <ScrollView style={styles.scrollView}>
          {cartData.map((dish) => (
            <Text style={{ padding: 10, color: "white", textAlign: "center" }}>
              {dish.name} x {dish.quantity}
            </Text>
          ))}
        </ScrollView>
        <View style={styles.separator}></View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: 500,
            fontSize: 15,
            color: "white",
            padding: 10,
          }}
        >
          {" "}
          Total Payment: {totalPrice.toFixed(2)}{" "}
        </Text>

        <TouchableOpacity style={styles.button} onPress={confirmPayment}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: 500,
              fontSize: 15,
              color: "white",
            }}
          >
            {" "}
            Confirm{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headercontainer: {
    backgroundColor: "#E2814E",
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "rgba(48, 64, 87, 1)",
  },
  header: {
    fontSize: 23,
    textAlign: "center",
    color: "white",
  },
  receipt: {
    alignItems: "center",
    backgroundColor: "#414F64",
    width: "250px",
    height: "400px",
    alignSelf: "center",
    alignContent: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#5DB075",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    width: "150px",
    textAlign: "center",
  },
  separator: {
    height: 3,
    width: "100%",
    backgroundColor: "#E2814E",
  },
});
