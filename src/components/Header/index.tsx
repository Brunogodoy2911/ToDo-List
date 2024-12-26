import { View, Text, Image } from "react-native";
import React from "react";
import { s } from "./styles";

export function Header() {
  return (
    <View style={s.container}>
      <Image style={s.logo} source={require("../../../assets/icon.png")} />
    </View>
  );
}
