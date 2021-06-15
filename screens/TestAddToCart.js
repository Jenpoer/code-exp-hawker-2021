import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import ShopListItem from "../components/ShopListItem";
import { createStackNavigator } from "@react-navigation/stack";
import ShopDetailsScreen from "./ShopDetailsScreen.js";
import firebase from "../database/firebaseDB.js";

export default function test({ navigation }) {
  return (
    <View style={StyleSheet.container}>
      <Text style={styles.logout}>
        logout
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "rgba(48, 64, 87, 1)",
  },
  logout: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 24,
    color: "black",
  },
});
