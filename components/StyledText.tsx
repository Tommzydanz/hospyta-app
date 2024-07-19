import React from 'react';
import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}

export function HeaderText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Axiforma' }]} />;
}

export function TitleText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'GothamPro_Bold' }]} />;
}

export function MsgText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'GothamPro' }]} />;
}

