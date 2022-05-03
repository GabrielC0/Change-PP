import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Alert, Image } from "react-native";
import Avatar from "./Avatar";


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Avatar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});