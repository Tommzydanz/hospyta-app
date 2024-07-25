import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { MediumText } from "./StyledText";
import Colors from "@/constants/Colors";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";

interface CardProps {
  style?: ViewStyle;
  leftContent?: React.ReactNode;
  mainContent?: React.ReactNode;
  buttonText?: string;
  onButtonPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
  baseColor?: string;
}

const CARD_WIDTH = 334;
const CARD_HEIGHT = 147;

const Card: React.FC<CardProps> = ({
  style,
  leftContent,
  mainContent,
  buttonText,
  onButtonPress,
  backgroundColor = Colors.light.purple,
  textColor = Colors.light.purple,
  baseColor,
}) => {
  const cardStyle: ViewStyle = {
    ...styles.card,
    backgroundColor,
    ...style,
  };

  return (
    <View style={styles.container}>
      <View style={cardStyle}>
        {leftContent && <View style={styles.leftContent}>{leftContent}</View>}
        <View style={styles.mainContent}>{mainContent}</View>
      </View>
      <View
        style={[
          styles.bottomLine,
          { backgroundColor: baseColor, opacity: 0.4 },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    alignItems: "center",
  },
  card: {
    flex: 1,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
    marginRight: 15,

    flexDirection: "row",
  },
  leftContent: {
    marginRight: 15,
  },
  mainContent: {
    flex: 1,
  },
  bottomLine: {
    width: "85%",
    height: 9,
    justifyContent: "center",
    alignSelf: "baseline",
    marginHorizontal: 16,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default Card;
