import { View, Text, TextProps } from "react-native";
import React from "react";
import { s } from "./styles";

type TaskCounterProps = TextProps & {
  label: string;
  count: string | number;
};

export function TaskCounter({ label, count, style }: TaskCounterProps) {
  return (
    <View style={s.container}>
      <Text style={[s.label, style]}>{label}</Text>
      <Text style={s.count}>{count}</Text>
    </View>
  );
}
