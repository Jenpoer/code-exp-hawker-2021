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
import RNPickerSelect from "react-native-picker-select";
import firebase from "../database/firebaseDB";
const db = firebase.firestore().collection("userinfo");

export default function signupscreen({ navigation, route }) {
  //const auth = firebase.auth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [user, setUser] = useState("");
  const [status, setStatus] = useState("");

  // useEffect(()=>{
  //   if(errorText){
  //     const newData = {
  //     email: email,
  //     user:user,
  //     status: status,
  //     id: user.length.toString(),
  //   };
  //   db.add(newData);
  //   }

  // },[]);

  // useEffect(() => {
  //   const unsubscribe = db.onSnapshot((collection)=>{
  //     const updatedNotes = collection.docs.map((doc) => {
  //       return {
  //         id: doc.id,
  //         ...doc.data(),
  //       };
  //     });
  //     //setNotes(updatedNotes);
  //   });

  //     return () => {
  //       unsubscribe();
  //     };
  // }, []);

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

      if (userCredential) {
        // the userCredential is a variable that will hold the response in it, it contains all the user info in it
        // Signed in
        // This user variable contains all the info related to user including its id
        db.doc(userCredential.user.uid).set({
          user: user,
          email: email,
          status: status,
        });
      }

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
        <RNPickerSelect
          onValueChange={(value) => setStatus(value)}
          items={[
            { label: "Donor", value: "Donor" },
            { label: "Donatee", value: "Donatee" },
          ]}
        />
        <TouchableOpacity onPress={signup} style={styles.signupbutton}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.errorText}>{errorText}</Text>
        <Text
          style={styles.loginText}
          onPress={() => {
            navigation.navigate("Login");
          }}
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
