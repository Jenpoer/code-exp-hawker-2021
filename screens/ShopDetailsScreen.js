import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ShopItemListItem from "../components/ShopItemListItem";
import ShopDetailsHeader from "../components/ShopDetailsHeader";
import { createStackNavigator } from "@react-navigation/stack";

// Make a modal stack navigator
// 1 - Shop Details Item Screen with FlatList of all items
// 2 - Modal popup of the items u wanna buy WHICH IS ANOTHER STACK NAVIGATOR TO THE "CART"

export default function ShopItemsList({ route, navigation }) {
  const { shopName, itemTags, preferredNo, hawkerName, hawkerAddress } =
    route.params;

  const SAMPLE_FOOD = [
    { name: "Chicken Rice", price: 2.5 },
    { name: "Roasted Chicken Rice", price: 3 },
  ];

  function renderItem({ item }) {
    return (
      <TouchableOpacity>
        <ShopItemListItem name={item.name} price={item.price} />
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView>
      <ShopDetailsHeader
        shopName={shopName}
        hawkerName={hawkerName}
        hawkerAddress={hawkerAddress}
      />
      <FlatList
        style={{ width: "100%" }}
        data={SAMPLE_FOOD}
        renderItem={renderItem}
      />
    </ScrollView>
  );
}
