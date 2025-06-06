import { router } from "expo-router";
import { Pressable, View, Text, Image, TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !city || !uf || !password) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const user = { name, email, city, uf,password };
      await AsyncStorage.setItem("user", JSON.stringify(user));
      Alert.alert("Sucesso", "Conta criada com sucesso!");
      router.push("/login");
    } catch (error) {
      Alert.alert("Erro", "Falha ao criar conta." + error);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="w-full mt-4 px-4 flex-1 justify-center gap-8">
        <Image source={require("@/assets/images/logo.png")} className="mx-auto" />
        <View className="flex gap-6">
          <TextInput
            className="bg-white rounded-lg px-2 py-4"
            placeholder="Nome completo"
            placeholderTextColor="#8e8e8e"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            className="bg-white rounded-lg px-2 py-4"
            placeholder="Email"
            placeholderTextColor="#8e8e8e"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            className="bg-white rounded-lg px-2 py-4"
            placeholder="Cidade"
            placeholderTextColor="#8e8e8e"
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            className="bg-white rounded-lg px-2 py-4"
            placeholder="UF"
            placeholderTextColor="#8e8e8e"
            value={uf}
            onChangeText={setUf}
          />
          <TextInput
            className="bg-white rounded-lg px-2 py-4"
            placeholder="Senha"
            placeholderTextColor="#8e8e8e"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Pressable className="bg-[#6F8940] rounded-lg" onPress={handleRegister}>
            <Text className="text-white font-bold text-lg text-center py-2">
              CRIAR CONTA
            </Text>
          </Pressable>

          <View className="flex-row gap-2 justify-center">
            <Text className="items-center text-stone-600">Já possui conta?</Text>
            <Pressable onPress={() => router.back()}>
              <Text className="text-[#6F8940]">Entrar na conta</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
