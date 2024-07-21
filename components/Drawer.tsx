import React, { useRef, useState } from "react";
import {
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MsgText, TitleText } from "./StyledText";

const Drawer = ({ children }: any) => {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [drawerPosition] = useState<"left" | "right">("right");

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <TouchableOpacity onPress={() => drawer.current?.closeDrawer()}>
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.headerProfile}>
        <Image
          source={require("@/assets/images/avatar.png")}
          style={{ width: 55, height: 55 }}
        />
        <TitleText style={styles.paragraph}></TitleText>
        <MsgText></MsgText>
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <TouchableOpacity
        style={{
          padding: 40,
        }}
        onPress={() => drawer.current?.openDrawer()}
      >
        <Text>Open</Text>
      </TouchableOpacity>
      {children}
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  headerProfile: {
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    flexDirection: "row",
  },
});

export default Drawer;
