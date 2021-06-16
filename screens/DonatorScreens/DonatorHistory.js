import React, { useState, useEffect } from "react";
import {
  View,
  Header,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import firebase from "../../database/firebaseDB";

const DATA = [
  {
    title: "Sembawang Hills Food Centre",
    stall: "Chicken Rice Store",
    dish: "Roasted Chicken Rice",
    price: "$3.50",
    claimdate: "2016-01-04 10:34:23",
  },
  {
    title: "Lau Pa Sat",
    stall: "Laksa Store",
    dish: "Laksa",
    price: "$3.50",
    claimdate: "2016-01-04 10:34:23",
  },
  {
    title: "Newton Food Centre",
    stall: "Western Food",
    dish: "Fish & Chips",
    price: "$3.50",
    claimdate: "2016-01-04 10:34:23",
  },
  {
    title: "Tiong Bahru Market",
    address: "590 Upper Thomson Rd Singapore 574419",
    stall: "Western Food",
    dish: "Fish & Chips",
    price: "$3.50",
    claimdate: "2016-01-04 10:34:23",
  },
  {
    title: "Amoy Street Food Centre",
    stall: "Western Food",
    dish: "Fish & Chips",
    price: "$3.50",
    claimdate: "2016-01-04 10:34:23",
  },
  {
    title: "Maxwell Food Centre",
    stall: "Western Food",
    dish: "Fish & Chips",
    price: "$3.50",
    claimdate: "2016-01-04 10:34:23",
  },
  {
    title: "Chinatown Complex Food Centre",
    stall: "Western Food",
    dish: "Fish & Chips",
    price: "$3.50",
    claimdate: "2016-01-04 10:34:23",
  },
];

const db = firebase.firestore();

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <View style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.hawkerName}</Text>
    <Text style={[styles.stall, textColor]}>{item.shopName}</Text>
    {item.items.map((dish) => (
      <Text style={[styles.dish, textColor]}>{dish.name},</Text>
    ))}
    {/* <Text style={[styles.price, textColor]}>{item.totalPrice}</Text> */}
    <Text style={[styles.claimdate, textColor]}>{item.date}</Text>
  </View>
);

export default function DonatorHistory() {
  const user = firebase.auth().currentUser.uid;
  const historyDB = db.collection("userinfo/" + user + "/history");
  const [historyData, setHistoryData] = useState([]);
  const [hawkerName, setHawkerName] = useState("");
  const [shopName, setShopName] = useState("");

  // async function getShopName() {
  //   const shopRef = await db
  //         .collection("hawker/" + hawkerId + "/shops")
  //         .doc(shopId)
  //         .get();
  //         if(hawkerRef) {
  //           setShopName(shopRef.data().shopName);
  //         }

  //         db.collection("hawker").doc(hawkerId).get().then((docu) => {
  //           if(docu.exists) {
  //               setHawkerName(docu.data().title);
  //           }
  //         })
  // }

  // Load Firebase data on start
  useEffect(() => {
    const unsubscribe = historyDB.onSnapshot((collection) => {
      const orders = collection.docs.map((doc) => {
        // const { hawkerId, shopId, items } = doc.data();

        return {
          date: doc.id,
          ...doc.data(),
        };
      });

      setHistoryData(orders);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const renderItem = ({ item }) => {
    const backgroundColor = "#E2814E";
    const color = "white";

    return (
      <Item
        item={item}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headercontainer}>
        <Text style={styles.header}> Donation History</Text>
      </View>
      <FlatList
        data={historyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headercontainer: {
    flex: 1,
    backgroundColor: "#E2814E",
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "rgba(48, 64, 87, 1)",
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
  stall: {
    fontSize: 11,
  },
  dish: {
    fontSize: 9,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  header: {
    fontSize: 23,
    textAlign: "center",
    color: "white",
  },
  claimdate: {
    fontSize: 9,
    alignSelf: "flex-end",
    marginTop: -15,
  },
  price: {
    fontSize: 9,
  },
});
