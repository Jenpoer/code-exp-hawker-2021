import React, { useState } from "react";
import {
  View,
  Header,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

const DATA = [
  {
    title: "Sembawang Hills Food Centre",
    stall: "Chicken Rice Store",
    dish: "Roasted Chicken Rice",
    claimdate: "2016-01-04 10:34:23",
  },
  {
    title: "Lau Pa Sat",
    stall: "Laksa Store",
    dish: "Laksa",
    claimdate: "2016-01-04 10:34:23",
  },
  {
    title: "Newton Food Centre",
    stall: "Western Food",
    dish: "Fish & Chips",
    claimdate: "2016-01-04 10:34:23",
  },
  {
    title: "Tiong Bahru Market",
    address: "590 Upper Thomson Rd Singapore 574419",
    stall: "Western Food",
    dish: "Fish & Chips",
    claimdate: "2016-01-04 10:34:23",
  },
  {
    title: "Amoy Street Food Centre",
    stall: "Western Food",
    dish: "Fish & Chips",
    claimdate: "2016-01-04 10:34:23",
  },
  {
    title: "Maxwell Food Centre",
    stall: "Western Food",
    dish: "Fish & Chips",
    claimdate: "2016-01-04 10:34:23",
  },
  {
    title: "Chinatown Complex Food Centre",
    stall: "Western Food",
    dish: "Fish & Chips",
    claimdate: "2016-01-04 10:34:23",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <View style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Text style={[styles.stall, textColor]}>{item.stall}</Text>
    <Text style={[styles.dish, textColor]}>{item.dish}</Text>
    <Text style={[styles.claimdate, textColor]}>{item.claimdate}</Text>
  </View>
);

export default function App() {
  const renderItem = ({ item }) => {
    const backgroundColor = "#E2814E";
    const color = "white";

    return (
      <Item
        item={item}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headercontainer}>
        <Text style={styles.header}> Redemption History</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headercontainer: {
    flex: 1,
    backgroundColor: "#E2814E",
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "rgba(48, 64, 87, 1)",
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
  stall: {
    fontSize: 11,
  },
  dish: {
    fontSize: 9,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  header: {
    fontSize: 23,
    textAlign: "center",
    color: "white",
  },
  claimdate: {
    fontSize: 9,
    alignSelf: "flex-end",
    marginTop: -15,
  },
});
