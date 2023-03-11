import { useEffect, useState } from 'react'
import { HomeProduct } from '@components/Product/HomeProduct'
import { VStack } from 'native-base'

import { PRODUCTS } from '../../data/products'

import { SubGroup } from '../../components/Product/SubGroup'
import { Product } from '@components/Product'
import { ProductCardProps } from '@components/Product/ProductCard'

export function ProductCategory() {
  const [categorySelected, setCategorySelected] = useState('Carnes & Peixes')
  const [products, setProducts] = useState<ProductCardProps[]>([])

  useEffect(() => {
    const filtered = PRODUCTS.filter(
      (product) => product.category === categorySelected,
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
