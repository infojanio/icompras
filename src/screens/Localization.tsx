import { View, StyleSheet } from 'react-native'
import { Center } from 'native-base'
import React from 'react'
import { Map } from '@components/Map'
import { Input } from '@components/Input'

export function Localization() {
  return (
    <View>
      <Input placeholder="Busque pelo CEP" />
      <View style={styles.container}>
        <Map />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: '#7fb9db',
  },
})
