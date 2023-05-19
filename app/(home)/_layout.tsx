import { Tabs } from "expo-router";

export default function HomeLayout() {
  return (
    <Tabs initialRouteName="hub" screenOptions={{ headerShown: true }}>
      <Tabs.Screen name="hub" options={{ title: "Hub" }} />
      <Tabs.Screen name="news" options={{ title: "News" }} />
      <Tabs.Screen name="newsId/[newsId]" options={{ href: null }} />
    </Tabs>
  );
}
