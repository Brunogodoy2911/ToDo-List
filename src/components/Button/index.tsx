import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { IconProps as TablerIconsProps } from "@tabler/icons-react-native";

import { s } from "./styles";

export default function Button({
  children,
  style,
  ...rest
}: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={[s.button, style]} activeOpacity={0.8} {...rest}>
      {children}
    </TouchableOpacity>
  );
}

type IconProps = {
  icon: React.ComponentType<TablerIconsProps>;
};

function Icon({ icon: Icon }: IconProps) {
  return <Icon size={20} color="#F2F2F2" />;
}

Button.Icon = Icon;

export { Button };
