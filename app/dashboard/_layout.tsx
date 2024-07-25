import React, { useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Slot, Stack } from "expo-router";
import "react-native-reanimated";
import { View } from "react-native";
import BottomNav from "@/components/BottomNav";
import { SafeAreaView } from "react-native-safe-area-context";
import Drawer from "@/components/Drawer";
import { DrawerProvider } from "../context/useDrawerContext";

export default function AppLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <DrawerProvider>
      <Drawer>
        <View
          style={{
            flex: 1,
            height: "100%",
          }}
        >
          <Slot />
          <BottomNav />
        </View>
      </Drawer>
    </DrawerProvider>
  );
}
