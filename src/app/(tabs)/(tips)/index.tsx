import Tip from '@/src/components/tip';
import { FlatList, View } from 'react-native';

export default function Tips() {

  const tips = [
    {
      title: "1. Mantenha a calma e saia rapidamente da área de risco, seguindo rotas seguras.",
      image: require("@/assets/images/securityTip-1.png"),
    },
    {
      title: "2. Deslocamentos de terra geralmente ocorrem nas partes mais inclinadas. Corra para um local alto e distante.",
      image: require("@/assets/images/securityTip-2.png"),
    },
    {
      title: "3. Evite atravessar zonas com movimento de terra, pedras ou lama. A velocidade do deslizamento pode ser fatal.",
      image: require("@/assets/images/securityTip-3.png"),
    },
    {
      title: "4.  Muitas vezes, pequenos deslizamentos antecedem um maior. Continue se afastando até ter certeza de que está em local seguro.",
      image: require("@/assets/images/securityTip-4.png"),
    },
    {
      title: "5. Siga as orientações das autoridades locais e da Defesa Civil.",
      image: require("@/assets/images/securityTip-5.png"),
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