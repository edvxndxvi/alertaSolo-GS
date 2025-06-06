import { View } from 'react-native';
import SecurityStatus from '../securityStatus';

export default function Header() {
 return (
    <View className="absolute top-14 flex-row justify-center w-full">
        <SecurityStatus status="danger" />
    </View>
  );
}