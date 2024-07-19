import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

export default function GuestLayout() {
  return (
    <Stack initialRouteName='signIn'>
        <Stack.Screen name='signIn'/>
        <Stack.Screen name='register'/>
    </Stack>
  )
}

const styles = StyleSheet.create({})