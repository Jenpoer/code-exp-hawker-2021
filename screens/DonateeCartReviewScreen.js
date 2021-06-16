import React, { useState } from "react";
import {
  Switch,
  View,
  Header,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

const dishes = [
  "Roasted Chicken Rice x 2",
  "Steamed Chicken Rice x 2",
  "Roasted Duck Rice x 3",
  "Whole Chicken x 2",
  "Chicken Noodle x 2",
  "Duck Noodle x 2",
];

export default function DonateeCartReviewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headercontainer}>
        <Text style={styles.header}> Redemption Page </Text>
      </View>
      <View style={styles.receipt}>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            padding: 10,
            textAlign: "center",
            fontWeight: "Bold",
          }}
        >
          {" "}
          Sembawang Hills Food Centre{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            textAlign: "center",
            padding: 10,
          }}
        >
          {" "}
          Chicken Rice Store{" "}
        </Text>
        <View style={styles.separator}></View>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            padding: 5,
            textAlign: "center",
          }}
        >
          {" "}
          2016-01-04 10:34:23{" "}
        </Text>
        <View style={styles.separator}></View>
        <ScrollView style={styles.scrollView}>
          {dishes.map((dish) => (
            <Text style={{ padding: 10, color: "white", textAlign: "center" }}>
              {dish}
            </Text>
          ))}
        </ScrollView>
        <View style={styles.separator}></View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: 500,
            fontSize: 15,
            color: "white",
            padding: 10,
          }}
        >
          {" "}
          Total Points Deducted: 13{" "}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: 500,
            fontSize: 15,
            color: "white",
            padding: 10,
          }}
        >
          {" "}
          Remaining Points: 151{" "}
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: 500,
              fontSize: 15,
              color: "white",
            }}
          >
            {" "}
            Redeem{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headercontainer: {
    backgroundColor: "#E2814E",
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "rgba(48, 64, 87, 1)",
  },
  header: {
    fontSize: 23,
    textAlign: "center",
    color: "white",
  },
  receipt: {
    alignItems: "center",
    backgroundColor: "#414F64",
    width: "250px",
    height: "400px",
    alignSelf: "center",
    alignContent: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#5DB075",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    width: "150px",
    textAlign: "center",
  },
  separator: {
    height: 3,
    width: "100%",
    backgroundColor: "#E2814E",
  },
});
