import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="(tabs)">
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="newsId" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ title: "Welcome" }} />
    </Stack>
  );
}
