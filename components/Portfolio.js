import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import Title from "./Title";

const Market = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title val="Portfolio" />
        <Text style={styles.btn} title="+" onPress={() => navigation.navigate("CreatePortfolio")}>
          +
        </Text>
      </View>
      <View style={styles.coinPort}>
        <Text>Portfolios here</Text>
      </View>
      <View style={styles.nav}>
        <Button title="Portfolio" onPress={() => navigation.navigate("Portfolio")} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  nav: {
    flex: 0.6,
    backgroundColor: "#ccc",
  },
  coinPort: {
    flex: 5,
    backgroundColor: "#d3d3d3",
  },
  header: {
    flex: 0.5,
    backgroundColor: "#989",
    flexDirection: "row",
  },
  btn: {
    fontSize: 36,
    marginTop: 30,
    marginRight: 25,
  },
});

export default Market;
