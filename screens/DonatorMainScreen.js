import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHandHoldingHeart,
  faHistory,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ShopListScreen from "./ShopListScreen";
import HawkerScreen from "./HawkerScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function DonatorMainScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          //Set the icon based on which route it is (name of the tab)
          if (route.name === "Donate") {
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
      <Tab.Screen name="Donate" component={HawkerScreen} />
      <Tab.Screen name="History" component={ShopListScreen} />
      <Tab.Screen name="Profile" component={ShopListScreen} />
    </Tab.Navigator>
  );
}
