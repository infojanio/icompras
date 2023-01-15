import { background } from 'native-base/lib/typescript/theme/styled-system'
import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

export function MapCard() {
  return (
    <View style={styles.card}>
      <Text>Buscar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '20%',
    backgroundColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})
