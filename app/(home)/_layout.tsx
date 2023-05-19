import { Tabs } from "expo-router";

export default function HomeLayout() {
  return (
    <Tabs initialRouteName="hub" screenOptions={{ headerShown: true }}>
      <Tabs.Screen name="hub" options={{ title: "Hub" }} />
      <Tabs.Screen name="news" options={{ title: "Settings" }} />
      <Tabs.Screen name="(hub)" options={{ href: null }} />
      <Tabs.Screen name="(news)" options={{ href: null }} />
    </Tabs>
  );
}
