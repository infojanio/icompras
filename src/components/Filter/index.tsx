import React from 'react'
import { Button } from 'native-base'

import SearchSvg from '@assets/search.svg'
import { View } from 'native-base'

export function Filter() {
  return (
    <View pt="1" pl={2} pr={2} pb="2" bg="green.600">
      <Button
        bg="gray.100"
        color="gray.700"
        variant="outline"
        borderColor="gray.400"
        size="lg"
        leftIcon={<SearchSvg height={20} width={20} />}
        onPress={() => {
          console.log('Pesquise o produto!')
        }}
        _text={{
          color: 'gray.500',
        }}
      >
        Pesquise um produto...
      </Button>
    </View>
  )
}