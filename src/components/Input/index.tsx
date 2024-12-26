import { TextInput, TextInputProps } from "react-native";
import React, { useState } from "react";
import { s } from "./styles";

type InputProps = TextInputProps & {
  onSubmit: () => void;
};

export function Input({ onSubmit, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[s.input, { borderColor: isFocused ? "#5E60CE" : "#0D0D0D" }]}
      placeholder="Adicione uma nova tarefa..."
      placeholderTextColor="#808080"
      returnKeyType="done"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onSubmitEditing={onSubmit}
      {...rest}
    />
  );
}
