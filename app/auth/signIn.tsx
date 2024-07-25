import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Navigator from "@/components/Navigator";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import {
  LightText,
  MediumText,
  MsgText,
  TitleText,
} from "@/components/StyledText";
import Envelope from "@/assets/svgs/Envelope.svg";
import Lock from "@/assets/svgs/Lock.svg";
import Google from "@/assets/svgs/Google.svg";
import Colors from "@/constants/Colors";

export default function SignIn() {
  return (
    <ScrollView style={styles.rootContainer}>
      <Navigator to="/" style={styles.arrowBack}>
        <FontAwesome6 name="arrow-left-long" size={15} color="black" />
      </Navigator>
      <View style={styles.titleContent}>
        <TitleText>Hello Dr!</TitleText>
        <LightText style={styles.msgText}>
          Fill your details or continue with social media
        </LightText>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="example@gmail.com"
          textAlign="left"
          style={styles.input}
        />
        <Envelope style={{ position: "absolute", left: 24, top: 13 }} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="***********"
          textAlign="left"
          secureTextEntry={true}
          style={styles.input}
        />
        <Lock style={{ position: "absolute", left: 24, top: 13 }} />
        <Ionicons
          name="eye-off-outline"
          size={24}
          color="black"
          style={styles.visiblity}
        />
        <MsgText
          style={{
            flex: 1,
            alignSelf: "flex-end",
            marginTop: 12,
            fontSize: 12,
          }}
        >
          Forgot Password?
        </MsgText>
      </View>
      <Navigator to="/dashboard" style={styles.button}>
        <MediumText style={styles.buttonText}>Sign In</MediumText>
      </Navigator>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <LightText>Or Sign In With</LightText>
        <View style={styles.line} />
      </View>
      <Navigator to="/dashboard" style={styles.googleButton}>
        <Google width={24} height={24} />
        <MediumText style={[styles.buttonText, { color: Colors.light.text }]}>
          Sign In With Google
        </MediumText>
      </Navigator>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 124,
        }}
      >
        <LightText>Don't have account?</LightText>
        <Navigator to="/auth/register">
          <MsgText style={{ color: Colors.light.blue }}> Register</MsgText>
        </Navigator>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.light.background,
  },
  arrowBack: {
    width: 44,
    height: 44,
    borderRadius: 5,
    marginTop: 31,
    borderColor: "#2b2b221a",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContent: {
    marginTop: 48,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  msgText: {
    marginTop: 16,
    textAlign: "center",
  },
  input: {
    width: "100%",
    color: Colors.light.text,
    paddingHorizontal: 64,
    paddingVertical: 12,
    backgroundColor: Colors.light.white,
    borderRadius: 15,
    alignItems: "center",
    fontFamily: "GothamPro_Medium",
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 16,
  },
  visiblity: { position: "absolute", right: 24, top: 13 },
  button: {
    width: "100%",
    padding: 12,
    height: 48,
    marginTop: 20,
    marginBottom: 24,
    borderRadius: 8,
    backgroundColor: Colors.light.blue,
  },
  buttonText: {
    color: Colors.light.background,
    textAlign: "center",
  },
  lineContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  line: {
    width: "30%",
    height: 1,
    backgroundColor: Colors.light.blue_gray,
  },
  googleButton: {
    width: "100%",
    paddingVertical: 12,
    marginTop: 24,
    height: 48,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 70,
    backgroundColor: Colors.light.white,
  },
});
