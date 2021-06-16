import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Button,
  Modal,
} from "react-native";
import ShopItemListItem from "../components/ShopItemListItem";
import ShopDetailsHeader from "../components/ShopDetailsHeader";
import { createStackNavigator } from "@react-navigation/stack";
import AddToCartModal from "./AddToCartModal";
import firebase from "../database/firebaseDB";

// Make a modal stack navigator
// 1 - Shop Details Item Screen with FlatList of all items
// 2 - Modal popup of the items u wanna buy WHICH IS ANOTHER STACK NAVIGATOR TO THE "CART"

function ShopItemsList({ route, navigation }) {
  const {
    shopId,
    shopName,
    hawkerId,
    hawkerName,
    hawkerAddress,
    headerImgSrc,
  } = route.params;

  const db = firebase
    .firestore()
    .collection("hawker/" + hawkerId + "/shops/" + shopId + "/menu");

  const [foodList, setFoodList] = useState([]);

  // Load Firebase data on start
  useEffect(() => {
    const unsubscribe = db.onSnapshot((collection) => {
      const foodMenu = collection.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setFoodList(foodMenu);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("AddToCart", { ...route.params, ...item })
        }
      >
        <ShopItemListItem
          name={item.name}
          price={item.price}
          imgSrc={item.imgSrc}
        />
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView>
      <ShopDetailsHeader
        shopName={shopName}
        hawkerName={hawkerName}
        hawkerAddress={hawkerAddress}
        imgSrc={headerImgSrc}
      />
      <FlatList
        style={{ width: "100%" }}
        data={foodList}
        renderItem={renderItem}
      />
    </ScrollView>
  );
}

const ShopDetailsStack = createStackNavigator();

export default function ShopDetailsScreen({ route, navigation }) {
  const {
    shopName,
    itemTags,
    preferredNo,
    hawkerId,
    hawkerName,
    hawkerAddress,
  } = route.params;
  return (
    <ShopDetailsStack.Navigator mode="modal">
      <ShopDetailsStack.Screen
        name="ListOfItems"
        component={ShopItemsList}
        initialParams={{
          shopName: shopName,
          hawkerName: hawkerName,
          hawkerAddress: hawkerAddress,
        }}
        options={{ title: shopName, headerShown: false }}
      />
      <ShopDetailsStack.Screen
        name="AddToCart"
        component={AddToCartModal}
        options={{
          title: "Donate Item",
          headerStyle: {
            marginBottom: "auto",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
        }}
      />
    </ShopDetailsStack.Navigator>
  );
}
