import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import signupscreen from "./screens/signupscreen";
import loginScreen from "./screens/loginScreen";
import DonatorMainScreen from "./screens/DonatorScreens/DonatorMainScreen";
import eligibilityScreen from "./screens/EligibilityScreen";
import DoneeMainScreen from "./screens/DoneeScreens/DoneeMainScreen";
import profileScreen from "./screens/profileScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="donatorMain" component={DonatorMainScreen} />
        <Stack.Screen name="doneeMain" component={DoneeMainScreen} />
        <Stack.Screen name="profileScreen" component={profileScreen} />
        <Stack.Screen
          name="Login"
          component={loginScreen}
          options={{
            headerTitle: "LOGO",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "center",
              color: "white",
            },
            headerStyle: {
              height: 120,
              backgroundColor: "rgba(48, 64, 87, 1)",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
            },
          }}
        />
        <Stack.Screen
          name="sign up page"
          component={signupscreen}
          options={{
            headerTitle: "LOGO",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "center",
              color: "white",
            },
            headerStyle: {
              height: 120,
              backgroundColor: "rgba(48, 64, 87, 1)",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
            },
          }}
        />
        <Stack.Screen name="eligibilityScreen" component={eligibilityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#304057",
  },
});
