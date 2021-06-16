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
import ShopItemListItem from "../../components/ShopItemListItem";
import ShopDetailsHeader from "../../components/ShopDetailsHeader";
import { createStackNavigator } from "@react-navigation/stack";
import AddToCartModal from "../AddToCartModal";
import firebase from "../../database/firebaseDB";
import DonatorCartReviewScreen from "./DonatorCartReviewScreen";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import DonatorConfirmPaymentScreen from "./DonatorConfirmPaymentScreen";

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

  const [foodData, setFoodData] = useState([]);

  const db = firebase
    .firestore()
    .collection("hawker/" + hawkerId + "/shops/" + shopId + "/menu");

  // Load Firebase data on start
  useEffect(() => {
    const unsubscribe = db.onSnapshot((collection) => {
      const foodMenu = collection.docs.map((doc) => {
        return {
          itemId: doc.id,
          ...doc.data(),
        };
      });

      setFoodData(foodMenu);
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
        data={foodData}
        renderItem={renderItem}
      />
    </ScrollView>
  );
}

const ShopDetailsStack = createStackNavigator();

export default function ShopDetailsScreen({ route, navigation }) {
  const {
    shopId,
    shopName,
    itemTags,
    preferredNo,
    imgSrc,
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
          shopId: shopId,
          shopName: shopName,
          hawkerId: hawkerId,
          hawkerName: hawkerName,
          hawkerAddress: hawkerAddress,
          headerImgSrc: imgSrc
        }}
        options={{ title: shopName,
          headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 30 }}
            onPress={() => navigation.navigate("DonatorCartReview", {...route.params})}
          >
            <FontAwesomeIcon icon={faShoppingCart} size={20} />
          </TouchableOpacity>
        ), }}
      />
      <ShopDetailsStack.Screen
        name="AddToCart"
        component={AddToCartModal}
        options={{
          title: "Donate Item",
        }}
      />
      <ShopDetailsStack.Screen
        name="DonatorCartReview"
        component={DonatorCartReviewScreen}
        options={{
          title: "Donation Box",
          headerStyle: {
            marginBottom: "auto",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
        }}
      />
      <ShopDetailsStack.Screen
        name="DonatorConfirmPayment"
        component={DonatorConfirmPaymentScreen}
        options={{
          title: "Payment Confirmed!",
          headerStyle: {
            marginBottom: "auto",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
        }}
      />
    </ShopDetailsStack.Navigator>
  );
}
