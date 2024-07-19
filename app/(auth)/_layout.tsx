import React from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';


export default function AppLayout() {
  return (
      <Stack screenOptions={{
      }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(drawer)" options={{ headerShown:false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
  );
}
