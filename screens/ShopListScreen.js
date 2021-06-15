import React,{useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ShopListItem from "../components/ShopListItem";
import { createStackNavigator } from "@react-navigation/stack";
import ShopDetailsScreen from "./ShopDetailsScreen.js";
import firebase from "../database/firebaseDB.js";

const SAMPLE_SHOPS = [
  { shopName: "Eat Rice Lah", itemTags: ["Rice", "Chicken"], preferredNo: 7 },
  { shopName: "Eat Noodles", itemTags: ["Noodle"], preferredNo: 7 },
];

const HAWKER_INFO = {
  hawkerName: "Super Hawker",
  hawkerAddress: "Something Road",
};

function ShopList({ navigation }) {
  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ShopDetails", { ...item, ...HAWKER_INFO })
        }
      >
        <ShopListItem
          shopName={item.shopName}
          itemTags={item.itemTags}
          preferredNo={item.preferredNo}
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

export default function ShopListScreen({navigation}) {
  useEffect(()=> {
    firebase.auth().onAuthStateChanged((user) => {
    if(user){
        navigation.navigate("shop list",{id: user.id, email:user.email});
    }else{
        navigation.navigate("Login");
    }
});
  },[]);
  
  return (
    <ShopListStack.Navigator>
      <ShopListStack.Screen
        name="ListOfShops"
        component={ShopList}
        options={{
          title: HAWKER_INFO.hawkerName,
        }}
      />
      <ShopListStack.Screen name="ShopDetails" component={ShopDetailsScreen} />
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
});
