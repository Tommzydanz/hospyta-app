import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navigator from "@/components/Navigator";

export default function SignIn() {
  return (
    <View style={{ padding: 40 }}>
      <Text>signIn</Text>
      <Navigator to="/">
        <Text>Go Back Home</Text>
      </Navigator>
      <Navigator to="/dashboard">
        <Text>Go to Dashboard Home</Text>
      </Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
