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
import firebase from "../../database/firebaseDB.js";
import { createStackNavigator } from "@react-navigation/stack";
import ShopListScreen from "./ShopListScreen";

const db = firebase.firestore().collection("hawker");

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

  // Load Firebase data on start
  useEffect(() => {
    const unsubscribe = db.onSnapshot((collection) => {
      const registeredHawkers = collection.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      // Convert URL from Firebase storage into "download link" so the picture can display
      registeredHawkers.map(async (hawker) => {
        const ref = firebase.storage().refFromURL(hawker.uri);
        const url = await ref.getDownloadURL();
        hawker.uri = url;
      });
      setFullData(registeredHawkers);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const hawkers = fullData;

    hawkers.map(async (hawker) => {
      const ref = firebase.storage().refFromURL(hawker.uri);
      const url = await ref.getDownloadURL();
      hawker.uri = url;
    });

    setFullData(hawkers);
      
  }, );

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
        data={fullData}
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
    <HawkerStack.Navigator>
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
