import { router } from "expo-router";
import { Pressable, View, Text, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView className="flex-1">
      <View className="w-full mt-4 px-4 flex-1 justify-center gap-8">

        <View className="flex gap-6">
          <TextInput
            className="bg-white rounded-lg px-2 py-4"
            placeholder="Email"
            placeholderTextColor={"#8e8e8e"}
          />
          <TextInput
            className="bg-white rounded-lg px-2 py-4"
            placeholder="Senha"
            placeholderTextColor={"#8e8e8e"}
          />

          <Pressable
            className="bg-[#A9B9FF] rounded-lg"
            onPress={() => router.push("../(tabs)")}
          >
            <Text className="text-white font-bold text-lg text-center py-2">
              ENTRAR
            </Text>
          </Pressable>

          <View className="flex-row gap-2 justify-center">
            <Text className=" items-center text-stone-600">Não possui conta?</Text>
            <Pressable>
              <Text
                className="text-[#A9B9FF]"
                onPress={() => router.push("/register")}
              >
                Criar conta
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
