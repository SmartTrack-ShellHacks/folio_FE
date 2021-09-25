import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Title = ({ navigation, val }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{val}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    marginLeft: 25,
    marginTop: 30,
    fontSize: 36,
    color: "#000000",
  },
});

export default Title;
