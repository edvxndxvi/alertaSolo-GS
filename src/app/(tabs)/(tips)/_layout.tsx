import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Tips from '.';
import FirstAid from './firstAid';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: styles.topBar, tabBarIndicatorStyle: {backgroundColor: '#A9B9FF'}}}>
      <Tab.Screen name="Proteja-se" component={Tips} />
      <Tab.Screen name="Primeiros Socorros" component={FirstAid} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  topBar: {
    paddingTop: Constants.statusBarHeight,
  }
});