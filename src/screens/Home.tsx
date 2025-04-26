import { useCallback, useEffect, useState } from 'react'
import { Box, VStack, useToast, ScrollView } from 'native-base'

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
import { ProductCashback } from './Product/ProductCashback'
import { ProductQuantity } from './Product/ProductQuantity'
import { Promotion } from '@components/Promotion'

type RouteParamsProps = {
  categoryId: string
}

type Props = {
  subcategory: string
  data: ProductDTO[]
}

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleOpenProductDetails(productId: string) {
    navigation.navigate('productDetails', { productId })
  }

  return (
    <VStack flex={1} bg={'gray.400'}>
      <Box>
        <HomeHeader />
      </Box>

      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <VStack flex={1} pt={1} bg={'gray.100'}>
          <Promotion />
          <Category />
          <ProductCashback />
          <ProductQuantity />
        </VStack>
      </ScrollView>
    </VStack>
  )
}
