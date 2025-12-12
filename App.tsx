import { View, Text } from 'react-native';
import './global.css';
import 'app/globals.css';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-green-500">
      <Text className="text-white text-xl font-bold">welcome</Text>
    </View>
  );
}
