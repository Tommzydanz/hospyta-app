import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  StatusBar,
  SafeAreaView,
  Platform,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MsgText, TitleText } from "./StyledText";
import { useDrawer } from "@/app/context/useDrawerContext";
import Colors from "@/constants/Colors";
import Constants from "expo-constants";
import Wallet from "@/assets/svgs/Wallet.svg";
import TrackOrder from "@/assets/svgs/Location.svg";
import MyPosts from "@/assets/svgs/Edit.svg";
import Settings from "@/assets/svgs/Settings.svg";
import LiveSupport from "@/assets/svgs/Receipt.svg";
import SuggestFeatures from "@/assets/svgs/Settings.svg";
import LogOut from "@/assets/svgs/Logout.svg";

interface DrawerProps {
  children: React.ReactNode;
}

const { width, height } = Dimensions.get("screen");
const DRAWER_WIDTH = width * 0.7;
const STATUSBAR_HEIGHT =
  Platform.OS === "ios"
    ? Constants.statusBarHeight
    : StatusBar.currentHeight || 0;

const drawerItems = [
  {
    id: "1",
    title: "Wallet",
    icon: Wallet,
    route: "/wallet",
  },
  {
    id: "2",
    title: "Track Order",
    icon: TrackOrder,
    route: "/track-order",
  },
  {
    id: "3",
    title: "My posts",
    icon: MyPosts,
    route: "/my-posts",
  },
  {
    id: "4",
    title: "Settings",
    icon: Settings,
    route: "/settings",
  },
  {
    id: "5",
    title: "Live support",
    icon: LiveSupport,
    route: "/live-support",
  },
  {
    id: "6",
    title: "Suggest features",
    icon: SuggestFeatures,
    route: "/suggest-features",
  },
  {
    id: "7",
    title: "Log-out",
    icon: LogOut,
    route: "/logout",
  },
];
const Drawer: React.FC<DrawerProps> = ({ children }) => {
  const { isDrawerOpen, toggleDrawer } = useDrawer();
  const translateX = useRef(new Animated.Value(DRAWER_WIDTH)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isDrawerOpen ? 0 : DRAWER_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDrawerOpen]);

  const navigationView = () => (
    <Animated.View
      style={[styles.navigationContainer, { transform: [{ translateX }] }]}
    >
      <View style={{ height: 160, backgroundColor: Colors.light.blue }}>
        <TouchableOpacity
          onPress={toggleDrawer}
          style={styles.closeButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="close" size={23} color="black" />
        </TouchableOpacity>
        <View style={styles.headerProfile}>
          <Image
            source={require("@/assets/images/avatar.png")}
            style={{ width: 55, height: 55 }}
          />
          <View style={{ marginLeft: 12 }}>
            <TitleText style={styles.paragraph}>Welcome Dr,</TitleText>
            <MsgText style={styles.message}>What do you want today?</MsgText>
          </View>
        </View>
      </View>
      <View style={styles.drawerContent}>
        <FlatList
          data={drawerItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ flexDirection: "row", padding: 16 }}>
              <item.icon width={24} height={24} />
              <TitleText style={{ marginLeft: 16, fontSize: 16 }}>
                {item.title}
              </TitleText>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* Add more drawer content here */}
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <StatusBar translucent />
      {children}
      {isDrawerOpen && (
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={toggleDrawer}
        />
      )}
      {navigationView()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationContainer: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    width: DRAWER_WIDTH,
    height: height,
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 2,
  },
  closeButton: {
    padding: 16,
    alignSelf: "flex-end",
    paddingTop: STATUSBAR_HEIGHT,
  },
  headerProfile: {
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    flexDirection: "row",
  },
  paragraph: {
    fontSize: 18,
    color: Colors.light.white,
  },
  message: {
    fontSize: 12,
    color: Colors.light.white,
  },
  drawerContent: {
    flex: 1,
    paddingLeft: 24,
    marginTop: 57,
  },
});

export default Drawer;
