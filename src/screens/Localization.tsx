import { View, StyleSheet } from 'react-native'
import { Center } from 'native-base'
import React from 'react'
import { Map } from '@components/Map'
import { background } from 'native-base/lib/typescript/theme/styled-system'

export function Localization() {
  return (
    <View>
      <Center marginTop={10} >Localization</Center>
      <View style={styles.container}>
      <Map />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    background: "#7fb9db"
    
  }
})