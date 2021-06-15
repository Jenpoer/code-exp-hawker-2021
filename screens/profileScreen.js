import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import firebase from "../database/firebaseDB.js"

export default function profileScreen(){
    
    function logout() {
        firebase.auth().signOut();
      }

      return(
        <View style={styles.container} >
            <Text style={styles.header} >PROFILE</Text>
         <Text style={styles.logout} onPress={logout}>logout</Text> 
        </View>
      )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "rgba(48, 64, 87, 1)",
      },
    logout:{
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 24,
        color: "black"
    },
    header: {
        fontSize: 33,
        textAlign: "center",
        color: "white",
      },
})

