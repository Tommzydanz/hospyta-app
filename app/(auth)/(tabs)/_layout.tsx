import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, Text, StyleSheet} from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import Home from '@/assets/svgs/Home.svg'; 
import CalendarIcon from '@/assets/svgs/CalendarIcon.svg'; 
import People from '@/assets/svgs/People.svg';
import Shop from '@/assets/svgs/Shop.svg';
import ProfileIcon from '@/assets/svgs/ProfileIcon.svg';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          height: 70,
          paddingHorizontal: 24,
        },
        tabBarItemStyle: {
         marginHorizontal: -12,
         height: 48,
         alignSelf: 'center',
         borderRadius: 12,
        },
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveBackgroundColor: '#4425F51A',
        tabBarLabel: ({ focused }) => {
          if (!focused) return '';
          const name = route.name === 'index' ? 'home' : route.name;
          return <Text style={styles.iconText}>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</Text>;
        }
      })}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home />, // Use the 'Home' component
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color }) => <CalendarIcon color={'#8696BB'}/>,
        }}
      />
      <Tabs.Screen
        name="feeds"
        options={{
          title: 'Commnity Feeds',
          tabBarIcon: ({ color }) => <People />,
        }}
      />
       <Tabs.Screen
        name="shopping"
        options={{
          title: 'Shop for Medicines',
          tabBarIcon: ({ color }) => <Shop />,
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <ProfileIcon />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#4425F5',
    marginLeft: 14,
  }
})