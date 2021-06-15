import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import signupscreen from "./screens/signupscreen";
import ShopDetailsScreen from "./screens/ShopDetailsScreen";
import loginScreen from "./screens/loginScreen";
import DonatorMainScreen from "./screens/DonatorMainScreen"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen name= "donatorMain" component={DonatorMainScreen} />
        <Stack.Screen name = "Login" component={loginScreen} 
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
        }}/>
        <Stack.Screen name= "sign up page" component={signupscreen} 
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
        }}/>
        
        
        <Stack.Screen name= "shop Details" component={ShopDetailsScreen} />
      </Stack.Navigator>
      {/* {<Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            //Set the icon based on which route it is (name of the tab)
            if (route.name === "Donate") {
              iconName = faHandHoldingHeart;
            } else if (route.name === "History") {
              iconName = faHistory;
            } else if (route.name === "Profile") {
              iconName = focused ? faUser : faUser;
            }

            // You can return any component that you like here!
            return (
              <FontAwesomeIcon icon={iconName} size={size} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "#FEB904",
          inactiveTintColor: "#FEFDFB",
          style: { backgroundColor: "#304057", boxShadow: "0 -1px 2px rgba(0, 0, 0, 0.25)", border: "none" }
        }}
      >
        <Tab.Screen name="Donate" component={ShopListScreen} />
        <Tab.Screen name="History" component={ShopListScreen} />
        <Tab.Screen name="Profile" component={ShopListScreen} />
      </Tab.Navigator>} */}
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
