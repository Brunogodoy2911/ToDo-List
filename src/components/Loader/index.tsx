import React from "react";
import { View } from "react-native";

import { Skeleton } from "moti/skeleton";

export function Loader() {
  return (
    <View style={{ marginBottom: 8 }}>
      <Skeleton radius={8} width={327} height={64} />
    </View>
  );
}
