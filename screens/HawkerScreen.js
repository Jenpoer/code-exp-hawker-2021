import React, { useState, useEffect } from "react";
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
  ActivityIndicator,
  TextInput,
} from "react-native";
//import filter from 'lodash.filter';
import firebase from "../database/firebaseDB.js";
import { createStackNavigator } from "@react-navigation/stack";
import ShopListScreen from "./ShopListScreen";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Sembawang Hills Food Centre",
    address: "590 Upper Thomson Rd Singapore 574419",
    uri: "https://th.bing.com/th/id/Rcb5b49f2739a8abca5a8a4470920a54d?rik=i5k0qg3MO%2bRCVQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-eMlOGFD7kN8%2fTwMX2rhmSeI%2fAAAAAAAASj8%2fYNyfPGn4S-A%2fs1600%2fPicture%2b607.jpg&ehk=YVM9UNipsY4fCvR2PCwik94UkOFKYnGdghMKTb%2fbVd4%3d&risl=&pid=ImgRaw",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Lau Pa Sat",
    address: "590 Upper Thomson Rd Singapore 574419",
    uri: "https://www.tripsavvy.com/thmb/ovdT4AD8uwrgkNF00brHqNaXB_8=/1536x1021/filters:fill(auto,1)/lau_pa_sat_01-56a40c3d5f9b58b7d0d52325.JPG",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Newton Food Centre",
    address: "590 Upper Thomson Rd Singapore 574419",
    uri: "https://th.bing.com/th/id/OIP.NKL_o3HzOOaDRvfrK7cnugHaE8?pid=ImgDet&rs=1",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Tiong Bahru Market",
    address: "590 Upper Thomson Rd Singapore 574419",
    uri: "https://th.bing.com/th/id/OIP.kQ48tY-wwQvt6pnA2FhsvgHaFj?w=213&h=180&c=7&o=5&dpr=1.5&pid=1.7",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d78",
    title: "Amoy Street Food Centre",
    address: "590 Upper Thomson Rd Singapore 574419",
    uri: "https://th.bing.com/th/id/OIP.kQ48tY-wwQvt6pnA2FhsvgHaFj?w=213&h=180&c=7&o=5&dpr=1.5&pid=1.7",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Maxwell Food Centre",
    address: "590 Upper Thomson Rd Singapore 574419",
    uri: "https://th.bing.com/th/id/OIP.kQ48tY-wwQvt6pnA2FhsvgHaFj?w=213&h=180&c=7&o=5&dpr=1.5&pid=1.7",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "Chinatown Complex Food Centre",
    address: "590 Upper Thomson Rd Singapore 574419",
    uri: "https://th.bing.com/th/id/OIP.kQ48tY-wwQvt6pnA2FhsvgHaFj?w=213&h=180&c=7&o=5&dpr=1.5&pid=1.7",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image style={{ width: 193, height: 110 }} source={item.uri} />
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Text style={[styles.address, textColor]}>{item.address}</Text>
  </TouchableOpacity>
);

function HawkerList({ navigation }) {
  const [query, setQuery] = useState("");
  const [fullData, setFullData] = useState([]);

  function renderHeader() {
    return (
      <View
        style={{
          backgroundColor: "#fff",
          padding: 5,
          marginVertical: 5,
          borderRadius: 20,
          width: 250,
          alignSelf: "center",
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={(queryText) => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: "#fff", paddingHorizontal: 20 }}
        />
      </View>
    );
  }

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#7C3712" : "#E2814E";
    const color = "white";

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          navigation.navigate("ShopList", { ...item });
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>List of Hawker Centres</Text>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

const HawkerStack = createStackNavigator();

export default function HawkerScreen() {
  return (
    <HawkerStack.Navigator mode="modal">
      <HawkerStack.Screen
        name="HawkerList"
        component={HawkerList}
        options={{ headerShown: false }}
      />
      <HawkerStack.Screen
        name="ShopList"
        component={ShopListScreen}
        options={{ headerShown: false }}
      />
    </HawkerStack.Navigator>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 22,
  },
  address: {
    fontSize: 11,
  },
  header: {
    fontSize: 33,
    textAlign: "center",
    color: "white",
  },
});
