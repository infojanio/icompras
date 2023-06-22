import { HomeScreen } from '@components/HomeScreen'

import { MaterialIcons } from '@expo/vector-icons'
import { Box, Heading, HStack, Icon, Text, VStack } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CardCategory } from './CardCategory'

import { PRODUCTS } from '../../../data/products'

import { GroupSubCategory } from '../../Product/desc/GroupSubcategory'
import { Product } from '@components/Product'
import { ProductCardProps } from '@components/Product/ProductCard'

export function CategoryDetails() {
  const [subCategorySelected, setSubCategorySelected] = useState('Aves')
  const [products, setProducts] = useState<ProductCardProps[]>([])

  useEffect(() => {
    const filtered = PRODUCTS.filter(
      (product) => product.subcategory === subCategorySelected,
    ) as ProductCardProps[]
    setProducts(filtered)
  }, [subCategorySelected])

  return (
    <VStack flex={1}>
      <HomeScreen title="Categorias" />

      <HStack
        bg={'gray.300'}
        justifyContent={'space-between'}
        mt={2}
        mb={2}
        alignItems="center"
      >
        <Heading
          color="gray.600"
          fontSize="14"
          ml={2}
          flexShrink={1}
          fontFamily="heading"
        >
          Carnes & Peixes
        </Heading>

        <HStack alignItems="center" ml={6}>
          <TouchableOpacity>
            <Icon
              opacity={1.25}
              as={<MaterialIcons name="filter-list" />}
              size={8}
              mr={1}
              ml={8}
              _light={{
                color: 'gray.800',
              }}
              _dark={{
                color: 'gray.100',
              }}
            />
          </TouchableOpacity>

          <Text
            color={'gray.600'}
            ml={1}
            mr={1}
            fontSize="14"
            textTransform="capitalize"
          >
            bovinas
          </Text>
        </HStack>
      </HStack>
      <VStack flex={1} ml={-6} mt={-6}>
        <GroupSubCategory
          onSelect={setSubCategorySelected}
          selected={subCategorySelected}
        />
        <Product subcategory={subCategorySelected} data={products} />
      </VStack>
    </VStack>
  )
}

/*
import { PRODUCTS } from '../../data/products'

import { GroupSubCategory } from '../../components/Product/GroupSubcategory'
import { Product } from '@components/Product'
import { ProductCardProps } from '@components/Product/ProductCard'

export function ProductSubCategory() {
  const [subCategorySelected, setSubCategorySelected] = useState('Aves')
  const [products, setProducts] = useState<ProductCardProps[]>([])

  useEffect(() => {
    const filtered = PRODUCTS.filter(
      (product) => product.subcategory === subCategorySelected,
    ) as ProductCardProps[]
    setProducts(filtered)
  }, [subCategorySelected])

  return (
    <VStack flex={1}>
      <HomeProduct />

      <VStack flex={1} ml={-6} mt={-6}>
        <GroupSubCategory
          onSelect={setSubCategorySelected}
          selected={subCategorySelected}
        />
        <Product subcategory={subCategorySelected} data={products} />
      </VStack>
    </VStack>
  )
}
*/
