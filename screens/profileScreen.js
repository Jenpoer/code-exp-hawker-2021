import React,{useState, useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import ShopListItem from "../components/ShopListItem";
import { createStackNavigator } from "@react-navigation/stack";
import ShopDetailsScreen from "./ShopDetailsScreen.js";
import firebase from "../database/firebaseDB.js";

const db = firebase.firestore().collection("userinfo");

export default function profileScreen({ navigation }) {
    const [data,setData] = useState("");

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

  function getUser(){
    const user = firebase.auth().currentUser;
    const databaseUSer = db.where(db.doc.id, "==" ,user.uid)
    .get()
    setData(databaseUSer.user);
  }

  return (
    <View style={styles.container}>
        <Text style= {styles.header}>PROFILE</Text>
        <Text style={styles.logout}>{data} </Text>
      <Text style={styles.logout} onPress={logout}>
        logout
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
  },
  header:{
      fontSize: 36,
      color: "white",
      textAlign: "center",
  }
});
