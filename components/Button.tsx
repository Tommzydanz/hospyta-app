import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MsgText } from './StyledText'

export default function Button() {
  return (
    <TouchableOpacity>
        <MsgText></MsgText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})