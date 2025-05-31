import { View, Text } from "react-native";

export default function Tip({title}:any) {
  return (
    <View className="p-4 border border-zinc-600 rounded-xl mb-4">
      <Text className="text-zinc-600 text-lg">{title}</Text>
    </View>
  );
}
