import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';




export function Map() {
   

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    
  },
  map: {
    width: '80%',
    height: '60%',
  },
});