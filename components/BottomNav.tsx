import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { usePathname } from "expo-router";
import { StyleSheet, View } from "react-native";
import Colors from "@/constants/Colors";
import Home from "@/assets/svgs/Home.svg";
import CalendarIcon from "@/assets/svgs/CalendarIcon.svg";
import People from "@/assets/svgs/People.svg";
import Shop from "@/assets/svgs/Shop.svg";
import ProfileIcon from "@/assets/svgs/ProfileIcon.svg";
import Navigator from "./Navigator";
import { TitleText } from "./StyledText";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
const items = [
  {
    name: "Home",
    icon: Home,
    to: "/dashboard",
  },

  {
    name: "Calendar",
    icon: CalendarIcon,
    to: "/dashboard/calendar",
  },
  {
    name: "Feeds",
    icon: People,
    to: "/dashboard/feeds",
  },
  {
    name: "Shop",
    icon: Shop,
    to: "/dashboard/shop",
  },
  {
    name: "Profile",
    icon: ProfileIcon,
    to: "/dashboard/profile",
  },
];
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 5,
        padding: 30,
        paddingTop: 15,
        borderTopColor: "rgba(0,0,0,0.1)",
        borderWidth: 1,
        marginTop: "auto",
      }}
    >
      {items.map((item, index) => {
        const isActive = pathname === item.to;
        return (
          <Navigator key={index} to={item.to}>
            <View
              style={{
                flexDirection: "row",
                padding: 14,
                alignItems: "center",
                borderRadius: 12,
                backgroundColor: isActive ? Colors.light.indigo : undefined,
                gap: 6,
              }}
            >
              <item.icon color={Colors.light.blue_gray} />
              {isActive && (
                <TitleText
                  style={{
                    fontSize: 14,
                    color: Colors.light.blue,
                  }}
                >
                  {item.name}
                </TitleText>
              )}
            </View>
          </Navigator>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  iconText: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
    color: "#4425F5",
    marginLeft: 14,
  },
});
