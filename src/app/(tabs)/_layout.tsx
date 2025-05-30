import { Tabs } from "expo-router";
import React from "react";
import TabBar from '@/src/components/tabbar/';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home"}}
      />
      <Tabs.Screen
        name="(tips)"
      />
    </Tabs>
  );
}