import { useEffect, useState } from 'react'
import { HomeProduct } from '@components/HomeProduct'
import { VStack } from 'native-base'

import { PRODUCTS } from '../data/products'

import { SubGroup } from '../components/SubGroup'
import { Product } from '@components/Product'
import { ProductCardProps } from '@components/ProductCard'

export function ProductSubCategory() {
  const [categorySelected, setCategorySelected] = useState('Carnes Bovinas')
  const [products, setProducts] = useState<ProductCardProps[]>([])

  useEffect(() => {
    const filtered = PRODUCTS.filter(
      (product) => product.subcategory === categorySelected,
    ) as ProductCardProps[]
    setProducts(filtered)
  }, [categorySelected])

  return (
    <VStack flex={1} ml={-6} mt={-6}>
      <SubGroup onSelect={setCategorySelected} selected={categorySelected} />
      <Product subcategory={categorySelected} data={products} />
    </VStack>
  )
}
