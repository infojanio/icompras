import React, { useEffect, useRef, useState } from 'react'

import { Dimensions, StyleSheet, Text } from 'react-native'
import { View, Image, Box } from 'native-base'

const { width, height } = Dimensions.get('screen')

import MapView, { Callout, LatLng, Marker, Region } from 'react-native-maps'

import * as Location from 'expo-location'

import { MapGoogleType } from '@components/MapGoogleType'
import { MapCard } from '@components/MapCard'
import { NewMarker } from '@components/NewMarker'
import { ButtonBack } from '@components/ButtonBack'
import { MapTypeCard } from '@components/MapTypeCard'
import { LocationActual } from '@components/LocationActual'
import database from '@components/NewMarker/database'

import PhotoPng from '@assets/UserLocal.png'

import { InfoAdd } from '@components/InfoAdd'

export function MapClient() {
  const [marker, setMarker] = useState([])

  const [showMarkerSetter, setShowMarkerSetter] = useState(false)
  const [markerCoordinates, setMarkerCoordinates] = useState<LatLng>({
    latitude: 0,
    longitude: 0,
  })

  const [cardHeight, setCardHeight] = useState(0)
  const [showCard, setShowCard] = useState<'back' | 'mapType'>('back')
  const [mapType, setMapType] = useState<'standard' | 'satellite' | 'terrain'>(
    'standard',
  )

  const markers = database.markers

  const mapRef = useRef<MapView>(null)

  useEffect(() => {
    getMyLocation()

    let timer = setTimeout(() => {}, 1000)

    return () => {
      handleNewMarker()
      console.log('O tempo foi:' + timer)
    }
  }, [])

  //Pede ao usuário permissão pra mostrar a localização atual
  const getMyLocation = async (): Promise<Region | undefined> => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') return

    const { latitude, longitude } = (
      await Location.getCurrentPositionAsync({})
    ).coords
    const region = {
      latitude,
      longitude,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    }

    return region
  }

  const goToMyLocation = async () => {
    const region = await getMyLocation() //pega a localização do usuário
    region && mapRef.current?.animateToRegion(region, 1000) //dá um zoom até o local do usuário
  }

  /*adicionar marcador - 1 opção
  const handleNewMarker = (coordinate) => {
    setMarker([...marker, coordinate])
    console.log(coordinate)
  }
  */

  const handleMsg = () => {}

  //adiciona marcador - 2 opção
  const handleNewMarker = async () => {
    if (!showMarkerSetter) {
      //se o botão estiver habilitado adicionar
      const camera = await mapRef.current?.getCamera()
      camera?.center && setMarkerCoordinates(camera?.center) //centraliza a tela

      //adiciona um novo marcador no mapa
    } else {
      markers.push({
        id: markers.length + 1,
        color: 'green',
        coordinates: markerCoordinates,
      })
    }
    setShowMarkerSetter((v) => !v)
  }

  //pega a altura da View
  const handleLayoutChange = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout
    setCardHeight(height)
  }

  return (
    <View flex={1}>
      <MapView
        style={styles.map}
        ref={mapRef}
        onMapReady={() => {
          goToMyLocation()
        }}
        loadingEnabled
        showsUserLocation
        showsMyLocationButton={false}
        mapType={mapType}
        zoomEnabled={true}
        minZoomLevel={5}
      >
        {showMarkerSetter && (
          <Marker
            draggable
            coordinate={markerCoordinates}
            onDragEnd={(e) => setMarkerCoordinates(e.nativeEvent.coordinate)}
            isPreselected={true}
            title={'Local de entrega'}
          />
        )}

        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinates}
            pinColor={marker.color}
            image={PhotoPng}
          >
            <Callout>
              <Text>Local de entrega</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <LocationActual mBottom={cardHeight} onPress={goToMyLocation} />

      <InfoAdd />

      <MapGoogleType
        mBottom={cardHeight}
        onPress={() => setShowCard('mapType')}
      />
      <NewMarker
        mBottom={cardHeight}
        showMarkerSetter={showMarkerSetter}
        onPress={handleNewMarker}
      />

      <MapCard />

      {showCard === 'back' ? (
        <ButtonBack handleLayoutChange={handleLayoutChange} />
      ) : (
        <MapTypeCard
          handleLayoutChange={handleLayoutChange}
          closeModal={() => setShowCard('back')}
          changeMapType={(mapType) => setMapType(mapType)}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    width: width,
    height: height,
  },
})
