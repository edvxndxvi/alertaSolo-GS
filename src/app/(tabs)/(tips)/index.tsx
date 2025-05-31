import Tip from '@/src/components/tip';
import { FlatList, View } from 'react-native';

export default function Tips() {

  const tips = [
    {
      title: "1. Mantenha a calma e saia rapidamente da área de risco."
    },
    {
      title: "2. Mantenha a calma e saia rapidamente da área de risco."
    },
    {
      title: "3. Mantenha a calma e saia rapidamente da área de risco."
    }
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
            />
          );
        }}
      />
    </View>
  );
}