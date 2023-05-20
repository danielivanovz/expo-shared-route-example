import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function NewsId() {
  const router = useRouter();
  const { newsId } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#bbb",
        gap: 10,
      }}
    >
      <Text style={{ color: "black" }}>news id {newsId}</Text>
      <Pressable
        style={{ backgroundColor: "#ddd", padding: 10, borderRadius: 10 }}
        onPress={() => {
          router.back();
        }}
      >
        <Text>go back</Text>
      </Pressable>
    </View>
  );
}
