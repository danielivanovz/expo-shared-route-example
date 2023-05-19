import { Stack } from "expo-router";

export default function NewsLayout() {
  return <Stack screenOptions={{ headerShown: true, title: 'News' }} />;
}