import React, { useState } from "react";
import { View } from "react-native";

import { IconCirclePlus } from "@tabler/icons-react-native";

import { s } from "./styles";
import { Input } from "../Input";
import Button from "../Button";

type FormProps = {
  onAddTask: (task: string) => void;
};

export function Form({ onAddTask }: FormProps) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <View style={s.container}>
      <Input onChangeText={setTask} value={task} onSubmit={handleAddTask} />
      <Button onPress={handleAddTask}>
        <Button.Icon icon={IconCirclePlus} />
      </Button>
    </View>
  );
}
