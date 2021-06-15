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
} from "react-native";
import firebase from "../database/firebaseDB";

const auth = firebase.auth();

export default function signupscreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [user, setUser] = useState("");

  async function signup() {
    Keyboard.dismiss();
    if (email === "" && password === "") {
      Alert.alert("Enter details to signup!");
    } else if (password.trim() && password.length < 6) {
      Alert.alert("Password must be more than 6 characters");
    } else {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(userCredential);
      setErrorText(`Sign up successful ${user}, head back to login page`);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.fieldTitle}>Username</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCompleteType="user"
          autoCorrect={false}
          keyboardType="username"
          value={user}
          onChangeText={(input) => setUser(input)}
        />
        <Text style={styles.fieldTitle}>Email</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          keyboardType="email-address"
          value={email}
          onChangeText={(input) => setEmail(input)}
        />
        <Text style={styles.fieldTitle}>Password</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(input) => setPassword(input)}
        />
        <TouchableOpacity onPress={signup} style={styles.signupbutton}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.errorText}>{errorText}</Text>
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate("Login")}
        >
          Already Registered? Click here to login
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "rgba(48, 64, 87, 1)",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 24,
    color: "white",
  },
  fieldTitle: {
    fontSize: 18,
    marginBottom: 12,
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
  signupbutton: {
    backgroundColor: "rgba(225, 130, 76, 1)",
    width: 120,
    alignItems: "center",
    padding: 18,
    marginTop: 12,
    marginBottom: 36,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  errorText: {
    color: "green",
    height: 40,
  },
  loginText: {
    color: "rgba(138, 161, 242, 0.8)",
    fontSize: 12,
    marginTop: 25,
    textAlign: "center",
  },
});
