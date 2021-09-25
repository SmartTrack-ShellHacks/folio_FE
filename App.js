import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Portfolio from "./components/Portfolio";
import Market from "./components/Market";
import CreatePortfolio from "./components/CreatePortfolio";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Portfolio" component={Portfolio} options={{ headerShown: false }} />
        <Stack.Screen name="Market" component={Market} options={{ headerShown: false }} />
        <Stack.Screen name="CreatePortfolio" component={CreatePortfolio} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
