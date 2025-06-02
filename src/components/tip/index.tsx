import { View, Text, Image } from "react-native";

export default function Tip({ title, image }: any) {
  return (
    <View className="p-4 border border-zinc-600 rounded-xl mb-4">
      <Text className="text-zinc-600 text-lg">{title}</Text>
      <Image
        source={image}
        className="w-full h-40 mt-2"
        resizeMode="contain"
      />
    </View>
  );
}
