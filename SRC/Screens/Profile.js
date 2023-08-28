import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Your content goes here</Text>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})