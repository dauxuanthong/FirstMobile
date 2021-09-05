import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Register from "./Components/Register";

export default function App() {
  return (
    <View style={styles.container}>
      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f6675",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 60,
    paddingRight: 60,
  },
});
