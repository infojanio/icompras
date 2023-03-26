import { useEffect, useState } from 'react'
import { HomeProduct } from '@components/Product/HomeProduct'
import { VStack } from 'native-base'

import { PRODUCTS } from '../../data/products'

import { GroupSubCategory } from '../../components/Product/GroupSubcategory'
import { Product } from '@components/Product'
import { ProductCardProps } from '@components/Product/ProductCard'

export function ProductCategory() {
  const [CategorySelected, setCategorySelected] = useState('Carnes & Peixes')

  const [products, setProducts] = useState<ProductCardProps[]>([])

  useEffect(() => {
    const filtered = PRODUCTS.filter(
      (product) => product.category === CategorySelected,
    ) as ProductCardProps[]
    setProducts(filtered)
  }, [CategorySelected])

  return (
    <VStack flex={1}>
      <HomeProduct />

      <VStack flex={1} ml={-6} mt={-6}>
        <GroupSubCategory
          onSelect={setCategorySelected}
          selected={CategorySelected}
        />
        <Product category={CategorySelected} data={products} />
      </VStack>
    </VStack>
  )
}
