import { useCallback, useEffect, useState } from 'react'
import { HomeProduct } from '@components/Product/HomeProduct'
import { Box, FlatList, HStack, VStack, useToast } from 'native-base'

import { useFocusEffect } from '@react-navigation/native'

import { AppError } from '@utils/AppError'
import { api } from '@services/api'
import { PRODUCTS } from '../../data/products'

import { Product } from '@components/Product'
import { ProductCardProps } from '@components/Product/ProductCard'
import { Group } from '@components/Product/Group'
import { SubCategoryDTO } from '@dtos/SubCategoryDTO'

export function ProductSubCategory() {
  const [subCategories, setSubCategories] = useState<SubCategoryDTO[]>([])
  const [subCategorySelected, setSubCategorySelected] = useState('Detergentes')

  const [products, setProducts] = useState<ProductCardProps[]>([])

  /*
  useEffect(() => {
    const filtered = PRODUCTS.filter(
      (product) => product.subcategory === subCategorySelected,
    ) as ProductCardProps[]
    setProducts(filtered)
  }, [subCategorySelected])
*/

  const toast = useToast()

  //listar as subcategories no select
  async function fetchSubCategories() {
    try {
      const response = await api.get('/subcategories')
      setSubCategories(response.data)
      console.log(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar as cidades atendidas'

      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      })
    }
  }

  useEffect(() => {
    fetchSubCategories()
  }, [])

  //listar as subcategories no select
  async function fetchProductsBySubcategory() {
    try {
      const response = await api.get(
        `/products/bysubcategory/${subCategorySelected}`,
      )
      // setSubCategories(response.data)
      console.log(response.data)
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
    }
  }

  useEffect(() => {
    fetchSubCategories()
  }, [])

  useFocusEffect(
    useCallback(() => {
      fetchProductsBySubcategory()
    }, [subCategorySelected]),
  )

  return (
    <VStack flex={1}>
      <HomeProduct />

      <Box flex={1} ml={-6} mt={-6}>
        <FlatList
          data={subCategories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Group
              name={item.name}
              isActive={
                //subCategorySelected === item.name
                subCategorySelected.toLocaleUpperCase() ===
                item.name.toLocaleUpperCase()
              }
              onPress={() => setSubCategorySelected(item.name)}
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

        <Product subcategory={subCategorySelected} data={products} />
      </Box>
    </VStack>
  )
}
