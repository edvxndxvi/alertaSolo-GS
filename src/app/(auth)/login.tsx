import { router } from "expo-router";
import { Pressable, View, Text, Image, TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const storedUser = await AsyncStorage.getItem("user");

      if (!storedUser) {
        Alert.alert("Erro", "Nenhum usuário encontrado. Registre-se primeiro.");
        return;
      }

      const user = JSON.parse(storedUser);

      if (user.email === email && user.password === password) {
        Alert.alert("Sucesso", "Login efetuado!");
        router.push("../(tabs)");
      } else {
        Alert.alert("Erro", "Email ou senha incorretos.");
      }
    } catch (error) {
      Alert.alert("Erro", "Falha ao realizar login.");
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="w-full mt-4 px-4 flex-1 justify-center gap-8">
        <Image source={require("@/assets/images/logo.png")} className="mx-auto" />
        <View className="flex gap-6">
          <TextInput
            className="bg-white rounded-lg px-2 py-4"
            placeholder="Email"
            placeholderTextColor="#8e8e8e"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            className="bg-white rounded-lg px-2 py-4"
            placeholder="Senha"
            placeholderTextColor="#8e8e8e"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Pressable className="bg-[#6F8940] rounded-lg" onPress={handleLogin}>
            <Text className="text-white font-bold text-lg text-center py-2">
              ENTRAR
            </Text>
          </Pressable>

          <View className="flex-row gap-2 justify-center">
            <Text className="items-center text-stone-600">Não possui conta?</Text>
            <Pressable onPress={() => router.push("/register")}>
              <Text className="text-[#6F8940]">Criar conta</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
