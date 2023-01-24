import React, { useState } from 'react'

import { Dimensions, SafeAreaView, StyleSheet } from 'react-native'

import { FlatList, Box, View, Image } from 'native-base'

import MeatImage from '../../assets/banner01.png'
import IceImage from '../../assets/banner02.png'
import HygieneImage from '../../assets/banner03.png'
import DrinkImage from '../../assets/acougue.png'

const images = [
  {
    id: 1,
    image: MeatImage,
  },

  {
    id: 2,
    image: IceImage,
  },

  {
    id: 3,
    image: HygieneImage,
  },

  {
    id: 4,
    image: DrinkImage,
  },
]

const { width } = Dimensions.get('window')

export function Promotion() {
  //barra de itens
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        style={{ maxHeight: width }}
        pagingEnabled
        scrollEnabled
        initialScrollIndex={1}
        horizontal
        onMomentumScrollEnd={(event) => {
          setActiveIndex(event.nativeEvent.contentOffset.x / width)
        }}
        scrollEventThrottle={36}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(images) => String(images.id)}
        renderItem={({ item }) => (
          <Image
            alt="promoções"
            source={item.image}
            width={width}
            pt={2}
            height={130}
            marginLeft={1}
            marginRight={1}
            borderRadius={12}
          />
        )}
      />

      {images.length > 1 ? (
        <Box flexDirection="row" justifyContent="center" marginTop={2}>
          {images.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                { backgroundColor: i === activeIndex ? 'blue' : 'gray' },
              ]}
            />
          ))}
        </Box>
      ) : null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
    marginBottom: 4,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
})