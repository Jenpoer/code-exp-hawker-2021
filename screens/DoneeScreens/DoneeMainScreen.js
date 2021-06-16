import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHandHoldingHeart,
  faHistory,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import DonateeHawkerScreen from "./DonateeHawkerScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import profileScreen from "../profileScreen";
import DonateeHistory from "./DonateeHistory";
import firebase from "../../database/firebaseDB.js";
const db = firebase.firestore().collection("userinfo");

const Tab = createBottomTabNavigator();

export default function DoneeMainScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((users) => {
      if (users) {
        navigation.navigate("doneeMain", { id: users.id, email: users.email });
      } else {
        navigation.navigate("Login");
      }
    });
  }, []);

  

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          //Set the icon based on which route it is (name of the tab)
          if (route.name === "Claim") {
            iconName = faHandHoldingHeart;
          } else if (route.name === "History") {
            iconName = faHistory;
          } else if (route.name === "Profile") {
            iconName = focused ? faUser : faUser;
          }

          // You can return any component that you like here!
          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FEB904",
        inactiveTintColor: "#FEFDFB",
        style: {
          backgroundColor: "#304057",
          boxShadow: "0 -1px 2px rgba(0, 0, 0, 0.25)",
          border: "none",
        },
      }}
    >
      <Tab.Screen name="Claim" component={DonateeHawkerScreen} />
      <Tab.Screen name="History" component={DonateeHistory} />
      <Tab.Screen name="Profile" component={profileScreen} />
    </Tab.Navigator>
  );
}
