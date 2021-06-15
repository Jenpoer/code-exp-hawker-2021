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

const SAMPLE_SHOPS = [
  {
    shopName: "Eat Rice Lah",
    itemTags: ["Rice", "Chicken"],
    preferredNo: 7,
    imgSrc:
      "https://www.treksplorer.com/wp-content/uploads/best-hawker-centres-singapore.jpg",
  },
  {
    shopName: "Eat Noodles",
    itemTags: ["Noodle"],
    preferredNo: 5,
    imgSrc:
      "https://www.treksplorer.com/wp-content/uploads/best-hawker-centres-singapore.jpg",
  },
];

function ShopList({ route, navigation }) {
  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ShopDetails", { ...item, ...route.params })
        }
      >
        <ShopListItem
          shopName={item.shopName}
          itemTags={item.itemTags}
          preferredNo={item.preferredNo}
          imgSrc={item.imgSrc}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={SAMPLE_SHOPS}
        renderItem={renderItem}
      />
    </View>
  );
}

const ShopListStack = createStackNavigator();

export default function ShopListScreen({ route, navigation }) {
  const {
    id: hawkerId,
    title: hawkerName,
    address: hawkerAddress,
  } = route.params;
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       navigation.navigate("shop list", { id: user.id, email: user.email });
  //     } else {
  //       navigation.navigate("Login");
  //     }
  //   });
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <TouchableOpacity onPress={logout}>
  //         <MaterialCommunityIconsname
  //           name="logout"
  //           size={24}
  //           color="grey"
  //           styles={{ marginRight: 20 }}
  //         />
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, []);

  return (
    <ShopListStack.Navigator>
      <ShopListStack.Screen
        name="ListOfShops"
        component={ShopList}
        initialParams={{
          hawkerId: hawkerId,
          hawkerName: hawkerName,
          hawkerAddress: hawkerAddress,
        }}
        options={{
          title: hawkerName,
        }}
      />
      <ShopListStack.Screen
        name="ShopDetails"
        component={ShopDetailsScreen}
        options={{
          title: "Menu",
        }}
      />
    </ShopListStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#304057",
    display: "flex",
    alignContent: "space-between",
  },
  button: {
    backgroundColor: "rgba(225, 130, 76, 1)",
    width: 120,
    alignItems: "center",
    padding: 18,
    marginTop: 12,
    marginBottom: 36,
  },
});
