import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

type SecurityStatusType = "safe" | "warning" | "danger";

type IoniconName = keyof typeof Ionicons.glyphMap;

interface SecurityStatusProps {
  status: SecurityStatusType;
}

export default function SecurityStatus({ status }: SecurityStatusProps) {
  const config: Record<
    SecurityStatusType,
    {
      icon: IoniconName;
      color: string;
      iconBg: string;
      textColor: string;
      text: string;
      subtitle: string;
    }
  > = {
    safe: {
      icon: "checkmark",
      color: "#22c55e",
      iconBg: "bg-green-200",
      textColor: "text-green-600",
      text: "Em área segura",
      subtitle: "Nenhum risco detectado.",
    },
    warning: {
      icon: "alert",
      color: "#fbbf24",
      iconBg: "bg-yellow-200",
      textColor: "text-yellow-500",
      text: "Em área de risco",
      subtitle: "Risco detectado!",
    },
    danger: {
      icon: "warning",
      color: "#ef4444",
      iconBg: "bg-red-200",
      textColor: "text-red-600",
      text: "Em área de extremo risco",
      subtitle: "Risco extremo detectado!",
    },
  };

  const current = config[status];

  return (
    <View className="bg-white flex-row items-center gap-2 py-2 pl-2 pr-4 rounded-full">
      <Ionicons
        name={current.icon}
        size={32}
        color={current.color}
        className={`p-2 ${current.iconBg} rounded-full`}
      />
      <View>
        <Text className={`font-bold text-lg ${current.textColor}`}>{current.text}</Text>
        <Text className="text-zinc-600">{current.subtitle}</Text>
      </View>
    </View>
  );
}
