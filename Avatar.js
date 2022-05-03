import { StyleSheet, Text, View, Alert, Image } from "react-native";
import React, { useState } from "react";
import Button from "./Boutton";

export default function Avatar() {
  const [cpt, setcpt] = useState(0);
  return (
    <View>
        <Text>{cpt}</Text>
      <Button
        onPress={() => {
          setcpt(cpt + 1);
        }}
      />

        <Button
        onPress={() => {
          setcpt(0);
        }}
        />

        <Image
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
          marginTop: 20,
        }}
        source={{
          uri: `https://avatars.dicebear.com/api/adventurer-neutral/${cpt}.png`,
        }}
      />
    </View>
  );
}