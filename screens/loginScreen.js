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
 } from "react-native";
 import firebase from "../database/firebaseDB";

 const auth = firebase.auth();

 export default function LoginScreen({ navigation }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errorText, setErrorText] = useState("");

   async function login() {
     Keyboard.dismiss();
     const userCredential = await auth.signInWithEmailAndPassword(
       email,
       password
     );
     console.log(userCredential);
     navigation.navigate("donatorMain");
   }

  //  const __doSignUp = () => {
  //   if (!email) {
  //     setError("Email required *")
  //     setValid(false)
  //     return
  //   } else if (!password && password.trim() && password.length > 6) {
  //     setError("Weak password, minimum 5 chars")
  //     setValid(false)
  //     return
  //   } else if (!__isValidEmail(email)) {
  //     setError("Invalid Email")
  //     setValid(false)
  //     return
  //   }

  //   __doCreateUser(email, password)
  // }

  // const __doCreateUser = async (email, password) => {
  //   try {
  //     let response = await auth().createUserWithEmailAndPassword(
  //       email,
  //       password
  //     )
  //     if (response && response.user) {
  //       Alert.alert("Success ✅", "Account created successfully")
  //     }
  //   } catch (e) {
  //     console.error(e.message)
  //   }
  // }

   

   return (
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={styles.container}>
         <Text style={styles.title}>Login</Text>
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
         <TouchableOpacity onPress={login} style={styles.loginButton}>
           <Text style={styles.buttonText}>Log in</Text>
         </TouchableOpacity>
         <Text 
          style={styles.loginText}
          onPress={() => navigation.navigate('sign up page')}>
          Don’t have an account? create a new account
        </Text>  
         <Text style={styles.errorText}>{errorText}</Text>
       </View>
     </TouchableWithoutFeedback>
   );
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor : "rgba(48, 64, 87, 1)"
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 24,
    color: "white"
  },
  fieldTitle: {
    fontSize: 18,
    marginBottom: 12,
    color: "white"
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
  loginButton: {
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
    color: "red",
    height: 40,
  },
  loginText:{
      color: "rgba(138, 161, 242, 0.8)",
      fontSize: 12,
      marginTop: 25,
      textAlign: 'center'
  }
});
