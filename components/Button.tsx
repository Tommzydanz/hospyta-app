import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { ReactNode } from "react";
import { MsgText } from "./StyledText";
import Colors from "@/constants/Colors";

export default function Button({
  name,
  color,
  style,
}: {
  name: string;
  color?: string;
  style?: StyleProp<any>;
}) {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <MsgText style={{ color: color }}>{name}</MsgText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.blue_gray,
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
});
