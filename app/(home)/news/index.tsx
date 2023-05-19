import { Stack, useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function News() {
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
      <Stack.Screen options={{ title: "News" }} />
      <Text style={{ color: "black" }}>News</Text>
      <Pressable
				style={{ backgroundColor: '#ddd', padding: 10, borderRadius: 10 }}
        onPress={() => {
          router.push(`/(hub)/'from news'`);
        }}
      >
        <Text>go to news id</Text>
      </Pressable>
    </View>
  );
}
