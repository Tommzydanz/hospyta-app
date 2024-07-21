import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React, { ReactNode } from "react";
import { useRouter } from "expo-router";

interface TouchableProps extends TouchableOpacityProps {
  children: ReactNode;
  to: string;
}

const Navigator = ({ children, to, ...rest }: TouchableProps) => {
  const navigate = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate.navigate(to);
      }}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
