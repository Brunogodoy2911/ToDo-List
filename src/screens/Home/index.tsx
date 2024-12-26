import React from "react";
import { View } from "react-native";

import { s } from "./styles";
import { Header } from "../../components/Header";
import { TasksList } from "../../components/TasksList";

export function Home() {
  return (
    <View style={s.container}>
      <Header />
      <TasksList />
    </View>
  );
}
