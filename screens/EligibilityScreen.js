import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Navigation,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
//import firebase from "./database/firebaseDB";

export default function eligibility({ navigation, route }) {
  // const db = firebase.firestore().collection("userinfo");
  //const auth = firebase.auth();

  const [dob, setdob] = useState("");
  const [income, setincome] = useState("");
  const [citizenship, setcitizenship] = useState("");
  const [document, setdocument] = useState("");

  async function form() {
    Keyboard.dismiss();
    if (dob === "" && income === "" && citizenship === "" && document === "") {
      Alert.alert("Enter details to check eligibilty!");
    } else {
      const userDetails = await firebase
        .auth()
        .createProfileWithDetails(dob, income, citizenship, document)
        .then((profile) => {
          db.add({
            dob: dob,
            income: income,
            citizenship: citizenship,
            document: document,
            id: profile.uid,
          });
        });
      console.log(userDetails);
      setErrorText(`Form completed! Please wait to hear back from us.`);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.headercontainer}>
          <Text style={styles.header}> Eligibility Form</Text>
        </View>

        <Text style={styles.fieldTitle}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCompleteType="DOB"
          autoCorrect={false}
          keyboardType="DateOfBirth"
          value={dob}
          onChangeText={(input) => setdob(input)}
        />
        <Text style={styles.fieldTitle}>Income</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCompleteType="income"
          autoCorrect={false}
          keyboardType="income"
          value={income}
          onChangeText={(input) => setincome(input)}
        />
        <Text style={styles.fieldTitle}>Citizenship</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCompleteType="Citizenship"
          autoCorrect={false}
          value={citizenship}
          onChangeText={(input) => setcitizenship(input)}
        />
        <Text style={styles.fieldTitle}>Document</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCompleteType="document"
          autoCorrect={false}
          value={document}
          onChangeText={(input) => setdocument(input)}
        />
        <TouchableOpacity
          style={styles.submitbutton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
    justifyContent: "center",
    padding: 24,
    backgroundColor: "rgba(48, 64, 87, 1)",
  },
  fieldTitle: {
    fontSize: 18,
    marginBottom: 12,
    color: "white",
  },
  header: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  input: {
    borderColor: "#999",
    borderWidth: 1,
    marginBottom: 24,
    padding: 4,
    height: 36,
    fontSize: 18,
    backgroundColor: "white",
  },
  submitbutton: {
    backgroundColor: "rgba(225, 130, 76, 1)",
    width: 300,
    alignItems: "center",
    alignSelf: "center",
    padding: 18,
    marginTop: 12,
    marginBottom: 36,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
