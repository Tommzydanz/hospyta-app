import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import Navigator from "@/components/Navigator";
import Button from "@/components/Button";
import { MediumText, MsgText} from "@/components/StyledText";

export default function OnBoardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onboardItems = [
    {
      id: "1",
      message:
        "Convenient Telehealth: Virtual Consultations and Follow-up... Anytime, Anywhere",
      image: require("@/assets/images/onboarding1.png"),
    },
    {
      id: "2",
      message:
        "Prescriptions Plus.....Your One-Stop Shop For Medicines, Equipment and More",
      image: require("@/assets/images/onboarding2.png"),
    },
    {
      id: "3",
      message: "Logistics ....And We'll Deliver it all Too, In Record Time.",
      image: require("@/assets/images/onboarding3.png"),
    },
    {
      id: "4",
      message:
        "Inspire Your Medical Practice Through the Power of Collaboration and Knowledge Sharing.",
      image: require("@/assets/images/onboarding4.png"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % onboardItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handlePress = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % onboardItems.length);
  };

  const currentItem = onboardItems[currentIndex];

  return (
    <TouchableOpacity onPress={handlePress} style={styles.root}>
      <ImageBackground
        source={currentItem.image}
        style={styles.background}
        resizeMethod="scale"
      >
        <Image
          source={require("@/assets/images/hospyta_logo.png")}
          style={styles.logo}
        />

        <View style={styles.content}>
          <MsgText style={styles.message}>{currentItem.message}</MsgText>
          <MediumText
            style={{
              alignSelf: "flex-start",
              color: "#E32654",
              marginBottom: 40,
            }}
          >
            With Hospyta
          </MediumText>
          <Navigator to="/auth/signIn" style={styles.button}>
            <MediumText style={styles.buttonText}>Sign In</MediumText>
          </Navigator>
          <Navigator to="/auth/register" style={styles.buttonTransparent}>
            <MediumText style={styles.buttonText}>Sign Up</MediumText>
          </Navigator>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  content: {
    marginTop: 144,
    paddingTop: 125,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  logo: {
    marginTop: 50,
    alignSelf: "flex-start",
  },
  message: {
    fontSize: 28,
    lineHeight: 42,
    alignSelf: "flex-start",
    textAlign: "left",
    color: "white",
  },
  button: {
    width: "100%",
    paddingVertical: 12,
    height: 48,
    marginBottom: 24,
    borderRadius: 8,
    backgroundColor: Colors.light.blue,
  },
  buttonTransparent: {
    backgroundColor: "transparent",
    width: "100%",
    paddingVertical: 12,
    height: 48,
    marginBottom: 18,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.light.background,
  },
  buttonText: {
    color: Colors.light.background,
    textAlign: "center",
  },
});
