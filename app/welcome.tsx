import { Stack, useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function Welcome() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        gap: 10,
      }}
    >
      <Stack.Screen options={{ title: "Welcome", headerShown: true }} />
      <Text style={{ color: "black" }}>Welcome</Text>
      <Pressable
				style={{ backgroundColor: '#ddd', padding: 10, borderRadius: 10 }}
        onPress={() => {
          router.push("/hub");
        }}
      >
        <Text>Login</Text>
      </Pressable>
    </View>
  );
}
