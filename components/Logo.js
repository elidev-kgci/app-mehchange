import React from 'react'
import { Image, View } from 'react-native'

export default function Logo() {
 return (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../assets/logo.png')} style={{  marginVertical: 5 }} />
  </View>
 )
}

