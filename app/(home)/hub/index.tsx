
import { Stack, useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function Hub() {
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
      <Stack.Screen options={{ title: "Hub" }} />
      <Text style={{ color: "black" }}>Hub</Text>
      <Pressable
				style={{ backgroundColor: '#ddd', padding: 10, borderRadius: 10 }}
        onPress={() => {
          router.push(`/(hub)/'from hub'`);
        }}
      >
        <Text>go to news id</Text>
      </Pressable>
    </View>
  );
}
