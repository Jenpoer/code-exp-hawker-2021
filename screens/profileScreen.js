import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ShopListItem from "../components/ShopListItem";
import { createStackNavigator } from "@react-navigation/stack";
import ShopDetailsScreen from "./DonatorScreens/ShopDetailsScreen.js";
import firebase from "../database/firebaseDB.js";
import { DrawerLayoutAndroid } from "react-native-gesture-handler";

const db = firebase.firestore().collection("userinfo");

export default function profileScreen({ navigation }) {
    const [data,setData] = useState("");
    const [data2,setData2] = useState([]);
    // useEffect(() => {
    //     const unsubscribe = 
    //       db.onSnapshot((collection) => {
    //        const updatedData = collection.docs.map((doc) => doc.data());
    //         setData(updatedData);
    //       });
    
    //     return () => { 
    //       unsubscribe();
    //     };
    //   }, []);
  function logout() {
    firebase.auth().signOut();
    navigation.navigate("Login");
  }

// useEffect(()=>{
  //   const User = firebase.auth().currentUser.uid;
  //   if (User != null) {
  //     db.doc(User)
  //       .get()
  //       .then((snapshot) => setData(snapshot.data()));
  //     if (data.user == "water1233") {
  //       console.log("donor");
  //       navigation.navigate("donatorMain", {
  //         id: users.id,
  //         email: users.email,
  //       });
  //     } else if (data.user == "sweet123") {
  //       console.log("donee");
  //       navigation.navigate("doneeMain", {
  //         id: users.id,
  //         email: users.email,
  //       });
  //     }
  //   }
  // });
 function changeAccount(){
    const User = firebase.auth().currentUser.uid;
      if (User != null) {
        db.doc(User)
          .get()
          .then((snapshot) => setData(snapshot.data()));
        if (data.status == "Donor") {
          //console.log("donor");
          navigation.navigate("donatorMain", {
            id: User.uid,
            email: User.email,
          });
        } else if (data.status == "Donatee") {
          //console.log("donee");
          navigation.navigate("doneeMain", {
            id: User.uid,
            email: User.email,
          });
        }
      }
 }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PROFILE</Text>
      <Text style={styles.info}>INFO :{data.user}</Text>
      <Text style={styles.logout} onPress={logout}>
        logout
      </Text>
      <Text style={styles.logout} onPress={changeAccount} >
        change
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    padding: 24,
    backgroundColor: "rgba(48, 64, 87, 1)",
  },
  logout: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    color: "white",
    textDecorationLine: 'underline',
  },
  info:{
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    color: "white",
  },
  header: {
    fontSize: 36,
    color: "white",
    textAlign: "center",
  },
});
