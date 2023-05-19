import { Stack } from "expo-router";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "news",
};

export default function NewsLayout() {
  return <Stack screenOptions={{ headerShown: true, title: 'News' }} />;
}