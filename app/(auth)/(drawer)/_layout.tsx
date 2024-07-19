import React from 'react'
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {Drawer} from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <Drawer>
            <Drawer.Screen name="wallet" options={{ headerShown: false }} />
            <Drawer.Screen name="track-order" options={{ headerShown: false }} />
            <Drawer.Screen name="posts" options={{ headerShown: false }} />
            <Drawer.Screen name="settings" options={{ headerShown: false }} />
            <Drawer.Screen name="live-support" options={{ headerShown: false }} />
            <Drawer.Screen name="suggest-features" options={{ headerShown: false }} />
            <Drawer.Screen name="log-out" options={{ headerShown: false }} />
        </Drawer>

    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({

})