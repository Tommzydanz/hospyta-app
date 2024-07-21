import React from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot, Stack } from 'expo-router';
import 'react-native-reanimated';
import { View } from 'react-native';
import BottomNav from '@/components/BottomNav';
import { SafeAreaView } from 'react-native-safe-area-context';
import Drawer from '@/components/Drawer'


export default function AppLayout() {
  return (
    <View style={{
      flex:1,
      height:"100%"
    }}>
      <Drawer>
      <Slot />
      <BottomNav />
      </Drawer>
    </View>
  );
}
