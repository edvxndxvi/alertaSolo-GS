import { View, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { router } from "expo-router";

export default function OnboardingScreen() {
  const handleDone = () => {
    router.push("/(auth)/login");
  };

  return (
    <View className="flex-1">
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        containerStyles={{ paddingHorizontal: 10 }}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image source={require("@/assets/images/onboarding-1.png")} />
            ),
            title: "Proteção para Você e Sua Comunidade",
            subtitle:
              "AlertaSolo conecta tecnologia à natureza para manter sua família segura. Acompanhe riscos com tranquilidade e confiança.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image source={require("@/assets/images/onboarding-2.png")} />
            ),
            title: "Tecnologia que Cuida em Tempo Real",
            subtitle:
              "Sensores monitoram o ambiente 24 horas por dia, enviando dados precisos para que você fique sempre informado.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image source={require("@/assets/images/onboarding-3.png")} />
            ),
            title: "Alertas Imediatos na Palma da Mão",
            subtitle:
              "Receba notificações rápidas sobre riscos na sua região. Informação confiável e em tempo real para proteger quem você ama.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image source={require("@/assets/images/onboarding-4.png")} />
            ),
            title: "Prepare-se com Nossas Dicas de Segurança",
            subtitle:
              "Orientações práticas e preventivas para você agir com calma e segurança em qualquer situação. Sua proteção começa com informação.",
          },
        ]}
      />
    </View>
  );
}
