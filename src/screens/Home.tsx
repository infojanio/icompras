import { useCallback, useEffect, useState } from 'react'
import { HomeProduct } from '@components/Product/HomeProduct'
import {
  Text,
  Box,
  FlatList,
  HStack,
  Heading,
  VStack,
  useToast,
  Center,
  ScrollView,
} from 'native-base'

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'

import { AppError } from '@utils/AppError'
import { api } from '@services/api'
import { useAuth } from '@hooks/useAuth'

import { ProductDTO } from '@dtos/ProductDTO'
import { SubCategoryDTO } from '@dtos/SubCategoryDTO'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

import { HomeHeader } from '@components/HomeHeader'
import { Category } from '@components/Category'

import { ProductList } from './Product/ProductList'

import Promotions from './Promotions'
import { Promotion } from '@components/Promotion'

type RouteParamsProps = {
  categoryId: string
}

type Props = {
  subcategory: string
  data: ProductDTO[]
}

export function Home() {
  const { user } = useAuth()

  const [isLoading, setIsLoading] = useState(true)
  // const [categories, setCategories] = useState<CategoryDTO[]>([])

  const [subCategories, setSubCategories] = useState<SubCategoryDTO[]>([])
  const [products, setProducts] = useState<ProductDTO[]>([])

  //const [categorySelected, setCategorySelected] = useState(categoryId)
  const [subCategorySelected, setSubCategorySelected] = useState('Detergentes')

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  const toast = useToast()

  function handleOpenProductDetails(productId: string) {
    navigation.navigate('productDetails', { productId })
  }

  //listar as subcategories no select
  async function fetchSubCategories() {
    try {
      setIsLoading(true)
      const response = await api.get('/subcategories')

      console.log(response.data)
      setSubCategories(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar as subcategorias'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    } finally {
      setIsLoading(false)
    }
  }

  //listar as subcategories no select
  async function fetchProducts() {
    try {
      setIsLoading(true)
      const response = await api.get('/products')

      console.log(response.data)
      setSubCategories(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os produtos'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    } finally {
      setIsLoading(false)
    }
  }

  //listar as subcategories no select
  async function fetchProductsBySubcategory() {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/products/subcategory/?subcategory_id=${subCategorySelected}`,
      )
      setProducts(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os produtos'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSubCategories()

    //
  }, [subCategorySelected])

  const firstSubCategory = subCategories.length > 0 ? subCategories[0] : null

  useFocusEffect(
    useCallback(() => {
      fetchProductsBySubcategory()
    }, [subCategorySelected]),
  )

  return (
    <VStack flex={1} bg={'gray.400'}>
      <Box>
        <HomeHeader />
      </Box>

      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <VStack flex={1} pt={1} bg={'gray.100'}>
          <Promotion />
          <Category />
          <ProductList />
          <ProductList />
          <ProductList />
        </VStack>
      </ScrollView>
    </VStack>
  )
}

/*
import { useState, useEffect, useCallback } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { FlatList, Heading, HStack, Text, useToast, VStack } from 'native-base'

import { api } from '@services/api'
import { AppError } from '@utils/AppError'
import { ProductDTO } from '@dtos/ProductDTO'

import { Group } from '@components/Product/Group'
import { HomeHeader } from '@components/HomeHeader'
import { ProductCard } from '@components/Product/ProductCard'

import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { Loading } from '@components/Loading'
import { SubCategoryDTO } from '@dtos/SubCategoryDTO'

export function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const [subcategories, setSubcategories] = useState<SubCategoryDTO[]>([])
  const [products, setProducts] = useState<ProductDTO[]>([])
  const [subcategorySelected, setSubcategorySelected] = useState<
    SubCategoryDTO[]
  >([])

  const toast = useToast()
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleOpenProductDetails(productId: string) {
    navigation.navigate('productDetails', { productId })
  }

  async function fetchSubcategories() {
    try {
      const response = await api.get('/subcategories')
      setSubcategories(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar as subcategorias dos produtos'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    }
  }

  async function fecthProductsBySubcategory() {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/products/byproduct/${subcategorySelected}`,
      )

      setProducts(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os produtos'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSubcategories()
  }, [])

  useFocusEffect(
    useCallback(() => {
      fecthProductsBySubcategory()
    }, [subcategorySelected]),
  )

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={subcategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Group
            name={item.name}
            subcategory={item.id}
            isActive={
              subcategorySelected.toLocaleUpperCase() ===
              item.name.toLocaleUpperCase()
            }
            onPress={() => setSubcategorySelected(item.name)} //o segredo tá aqui, passando id = subcategory_id
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        mt={6}
        mb={2}
        maxH={12}
        minH={10}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <VStack px={8}>
          <HStack justifyContent="space-between" mb={5}>
            <Heading color="gray.200" fontSize="md" fontFamily="heading">
              Produtos
            </Heading>

            <Text color="gray.200" fontSize="sm">
              {products.length}
            </Text>
          </HStack>

          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ProductCard
                onPress={() => handleOpenProductDetails(item.id)}
                data={item}
              />
            )}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{
              paddingBottom: 20,
            }}
          />
        </VStack>
      )}
    </VStack>
  )
}

/*
  <VStack flex={1}>
      <HomeProduct />

      <Box flex={1} ml={-6} mt={-6}>
        {firstSubCategory ? (
          <FlatList
            data={subCategories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Group
                name={item.name}
                subcategory={item.id}
                isActive={
                  subCategorySelected.toLocaleUpperCase() ===
                  item.name.toLocaleUpperCase()
                }
                onPress={() => setSubCategorySelected(item.name)} //o segredo tá aqui, passando id = subcategory_id
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{ px: 8 }}
            mt={6}
            mb={2}
            maxH={12}
            minH={10}
          />
        ) : (
          <Center mt={6} mb={2}>
            <Text color={'red.600'} fontSize={14}>
              Nenhuma subcategoria encontrada!
            </Text>
          </Center>
        )}

        {isLoading ? (
          <Loading />
        ) : (
          <VStack flex={1} px={2} bg={'gray.200'}>
            <VStack px={6} bg={'gray.200'}>
              <HStack justifyContent="space-between" mb={5}>
                <Heading color={'gray.700'} fontSize={'md'}>
                  {subCategorySelected}
                </Heading>

                <Text color="gray.700" fontSize={'md'}>
                  {products.length}
                </Text>
              </HStack>
            </VStack>

            <FlatList
              data={products}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ProductCard
                  data={item}
                  onPress={() => handleOpenProductDetails(item.id)}
                />
              )}
              numColumns={2}
              _contentContainerStyle={{
                marginLeft: 8,
                paddingBottom: 32,
              }}
              showsVerticalScrollIndicator={false}
            />
          </VStack>
        )}
      </Box>
    </VStack>
  )
}
*/
