import { Stack } from "expo-router";

export default function NewsIdLayout() {
  return (
    <Stack initialRouteName="[newsId]">
      <Stack.Screen
        name="[newsId]"
        options={{ title: "Single news page", headerShown: true }}
      />
    </Stack>
  );
}
