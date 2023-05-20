import { Stack } from "expo-router";

const AuthLayout = () => (
  <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="index"
      options={{ headerShown: false, title: "Welcome" }}
    />
  </Stack>
);

export default AuthLayout;
