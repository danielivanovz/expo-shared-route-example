import React from "react";
import { Slot } from "expo-router";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "welcome",
};

export default function RootLayout() {
  return (
    <Slot initialRouteName="welcome" screenOptions={{ headerShown: false }} />
  );
}
