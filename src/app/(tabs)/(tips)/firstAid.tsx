import Tip from '@/src/components/tip';
import { View, FlatList } from 'react-native';

export default function FirstAid() {

  const tips = [
    {
      title: "1. Nunca mova uma pessoa ferida a menos que esteja em risco iminente.",
      image: require("@/assets/images/firstAid-1.png"),
    },
    {
      title: "2. Acione os serviços de emergência (bombeiros, defesa civil, SAMU). Informe o local exato e a situação.",
      image: require("@/assets/images/firstAid-2.png"),
    },
    {
      title: "3. Verifique se a vítima está consciente, respirando e se há sangramentos ou fraturas aparentes.",
      image: require("@/assets/images/firstAid-3.png"),
    },
    {
      title: "4. Pessoas soterradas ou expostas ao ambiente podem sofrer hipotermia. Cubra com roupas ou cobertores, se possível.",
      image: require("@/assets/images/firstAid-4.png"),
    },
    {
      title: "5. Falar com calma ajuda a manter a pessoa consciente e diminui o risco de choque emocional.",
      image: require("@/assets/images/firstAid-5.png"),
    },
  ]
  return (
    <View className='mx-2'>
      <FlatList
        data={tips}
        className='mt-8'
        renderItem={({ item }) => {
          return (
            <Tip
              title={item.title}
              image={item.image}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}