import React from "react";
import { Text, TextProps } from "./Themed";

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "SpaceMono" }]} />;
}

export function TitleText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[{ fontFamily: "Axiforma", fontSize: 32 }, props.style]}
    />
  );
}

export function MediumText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[{ fontFamily: "GothamPro_Medium", fontSize: 16 }, props.style]}
    />
  );
}

export function LightText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "GothamPro_Light", fontSize: 16 }]}
    />
  );
}

export function MsgText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[{ fontFamily: "GothamPro", fontSize: 16 }, props.style]}
    />
  );
}
