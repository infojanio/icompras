import React, { useState, useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import {
  StyleSheet,
  View,
  Dimensions,
  Platform,
  PermissionsAndroid,
} from 'react-native'

//import Geolocation from '@react-native-community/geolocation'
import * as Location from 'expo-location'

const { width, height } = Dimensions.get('screen')

/* 
fazer a tipagem
interface Props {
  latitude: number
  longitude: number
}

type region = LocationObject 
 */
export function Map() {
  const [region, setRegion] = useState()
  const [markers, setMarkers] = useState([]) //
  const mapRef = useRef<MapView>(null)

  useEffect(() => {
    handleMyPermission()
  }, [])

  //pega a permissão em projetos EXPO
  function handleMyPermission() {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        //setErrorMsg('Permission to access location was denied')
        return
      }

      let region = await Location.getCurrentPositionAsync({})

      setRegion(region)
      console.log(region)
    })()
  }

  //Mostra o ponto atual do usuário no mapa
  function PointActual() {
    const mapRef = useRef<MapView>(null)
  }

  //cria um marcador no mapa
  function newMarker(e) {
    //console.log(e.nativeEvent.coordinate.latitude)
    //console.log(e.nativeEvent.coordinate.longitude)

    let dados = {
      key: markers.length, //cria chave aleatória, tamanho da lista
      coords: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
      },
      pinColor: '#FF0000',
    }

    //garante o deslocamento para o local onde foi criado o marcador
    setRegion({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })

    //pega todos os marcadores e adiciona +1 na lista
    setMarkers((oldArray) => [...oldArray, dados])
  }

  return (
    <View style={styles.container}>
      <MapView
        onMapReady={() => {
          Platform.OS === 'android'
            ? PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              ).then(() => {
                console.log('Usuário aceitou')
              })
            : console.log('Usuário não aceitou')
        }}
        style={styles.map}
        region={region}
        ref={mapRef}
        zoomEnabled={true}
        minZoomLevel={15}
        showsUserLocation={true}
        loadingEnabled={true}
        onPress={(e) => newMarker(e)}
      >
        {markers.map((marker) => {
          return (
            <Marker
              key={marker.key}
              coordinate={marker.coords}
              pinColor={marker.pinColor}
            />
          )
        })}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    width: width,
    height: height,
  },
})

/* Pega a localização em projetos CLI  
function handleMyLocation() {
    Geolocation.getCurrentPosition((info) => {
      console.log('LAT', info.coords.latitude)
      console.log('LONG', info.coords.longitude)

      
      setRegion({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })

 */
