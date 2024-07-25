import React, { useState } from "react";
import { Slot } from "expo-router";
import "react-native-reanimated";
import { View } from "react-native";
import BottomNav from "@/components/BottomNav";
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
