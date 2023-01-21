import React, { useEffect, useRef, useState } from 'react'

import { Dimensions, StyleSheet, View, Text } from 'react-native'
const { width, height } = Dimensions.get('screen')

import MapView, { Callout, LatLng, Marker, Region } from 'react-native-maps'

import * as Location from 'expo-location'

import { MapGoogleType } from '@components/MapGoogleType'
import { MapCard } from '@components/MapCard'
import { NewMarker } from '@components/NewMarker'
import { SearchCard } from '@components/SearchCard'
import { MapTypeCard } from '@components/MapTypeCard'
import { LocationActual } from '@components/LocationActual'
import database from '@components/NewMarker/database'

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

export function MapClient() {
  const [marker, setMarker] = useState([])

  const [showMarkerSetter, setShowMarkerSetter] = useState(false)
  const [markerCoordinates, setMarkerCoordinates] = useState<LatLng>({
    latitude: 0,
    longitude: 0,
  })

  const [cardHeight, setCardHeight] = useState(0)
  const [showCard, setShowCard] = useState<'search' | 'mapType'>('search')
  const [mapType, setMapType] = useState<'standard' | 'satellite' | 'terrain'>(
    'standard',
  )

  const markers = database.markers

  const mapRef = useRef<MapView>(null)

  useEffect(() => {
    handleNewMarker()
  }, [])

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

  const handleTimesTemp = () => {}

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
    <View style={styles.container}>
      <MapView
        onPress={(e) => handleNewMarker(e.nativeEvent.coordinate)}
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
          />
        )}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinates}
            pinColor={marker.color}
          />
        ))}
      </MapView>

      <LocationActual mBottom={cardHeight} onPress={goToMyLocation} />

      <MapGoogleType
        mBottom={cardHeight}
        onPress={() => setShowCard('mapType')}
      />

      <NewMarker
        mBottom={cardHeight + 100}
        showMarkerSetter={showMarkerSetter}
        onPress={handleNewMarker}
      />

      <MapCard />

      {showCard === 'search' ? (
        <SearchCard handleLayoutChange={handleLayoutChange} />
      ) : (
        <MapTypeCard
          handleLayoutChange={handleLayoutChange}
          closeModal={() => setShowCard('search')}
          changeMapType={(mapType) => setMapType(mapType)}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width,
    height: height,
  },
})
