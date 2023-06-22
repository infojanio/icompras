import { useEffect, useState } from 'react'
import { HomeProduct } from '@components/Product/HomeProduct'
import { Box, FlatList, VStack, useToast } from 'native-base'

import { AppError } from '@utils/AppError'
import { api } from '@services/api'
import { CategoryDTO } from '@dtos/CategoryDTO'

import { PRODUCTS } from '../../data/products'

import { GroupSubCategory } from '../../components/Product/desc/GroupSubcategory'
import { Product } from '@components/Product'
import { ProductCardProps } from '@components/Product/ProductCard'
import { Group } from '@components/Product/Group'

export function ProductCategory() {
  const [Categories, setCategories] = useState<CategoryDTO[]>([])

  const [CategorySelected, setCategorySelected] = useState('Peixes')
  const [products, setProducts] = useState<ProductCardProps[]>([])
  /*
  useEffect(() => {
    const filtered = PRODUCTS.filter(
      (product) => product.category === CategorySelected,
    ) as ProductCardProps[]
    setProducts(filtered)
  }, [CategorySelected])
*/

  const toast = useToast()

  //listar as cidades no select
  async function fetchCategories() {
    try {
      const response = await api.get('/categories')
      setCategories(response.data)
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
    fetchCategories()
  }, [])

  return (
    <VStack flex={1}>
      <HomeProduct />

      <Box flex={1} ml={-6} mt={-6}>
        <FlatList
          data={Categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Group
              name={item.name}
              isActive={
                //subCategorySelected === item.name
                CategorySelected.toLocaleUpperCase() ===
                item.name.toLocaleUpperCase()
              }
              onPress={() => setCategorySelected(item.name)}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ px: 8 }}
          mt={6}
          mb={2}
          maxH={12}
          minH={10}
        />

        <Product category={CategorySelected} data={Categories} />
      </Box>
    </VStack>
  )
}
