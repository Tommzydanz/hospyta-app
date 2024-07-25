import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  StyleProp,
} from "react-native";
import React from "react";
import { MediumText, MsgText } from "./StyledText";
import Colors from "@/constants/Colors";

export default function ShopItem({
  image,
  discountPercent,
  name,
  price,
  style,
}: {
  image: ImageSourcePropType;
  discountPercent: string;
  name: string;
  price: number;
  style?: StyleProp<any>;
}) {
  return (
    <View style={styles.medContainer}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <View style={[styles.discountContainer, style]}>
        <MsgText style={{ color: Colors.light.white, fontSize: 10 }}>
          {discountPercent}
        </MsgText>
      </View>
      <MsgText style={styles.text}>{name}</MsgText>
      <MediumText style={styles.price}>
        {"N" + price.toLocaleString("en-US")}
      </MediumText>
    </View>
  );
}

const styles = StyleSheet.create({
  medContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    marginLeft: 4,
    borderRadius: 12,
    shadowColor: Colors.light.gray,
    elevation: 6,
    backgroundColor: Colors.light.white,
    height: 190,
    width: 145,
  },
  image: {
    aspectRatio: 1,
    width: "40%",
  },
  text: {
    fontSize: 10,
    marginTop: 5,
    marginLeft: 12,
    alignSelf: "flex-start",
  },
  price: {
    fontSize: 12,
    marginTop: 5,
    marginLeft: 12,
    alignSelf: "flex-start",
  },
  discountContainer: {
    position: "absolute",
  },
});
