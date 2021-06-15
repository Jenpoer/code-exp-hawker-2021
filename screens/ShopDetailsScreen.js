import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ShopListItem from "../components/ShopListItem";
import { createStackNavigator } from "@react-navigation/stack";

// Make a modal stack navigator
// 1 - Shop Details Item Screen with FlatList of all items
// 2 - Modal popup of the items u wanna buy WHICH IS ANOTHER STACK NAVIGATOR TO THE "CART"
