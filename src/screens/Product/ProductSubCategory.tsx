import { useEffect, useState } from 'react'
import { HomeProduct } from '@components/Product/HomeProduct'
import { VStack } from 'native-base'

import { PRODUCTS } from '../../data/products'

import { SubGroup } from '../../components/Product/SubGroup'
import { Product } from '@components/Product'
import { ProductCardProps } from '@components/Product/ProductCard'

export function ProductSubCategory() {
  const [subCategorySelected, setSubCategorySelected] = useState(
    'Carnes Bovinas',
  )
  const [products, setProducts] = useState<ProductCardProps[]>([])

  useEffect(() => {
    const filtered = PRODUCTS.filter(
      (product) => product.subcategory === subCategorySelected,
    ) as ProductCardProps[]
    setProducts(filtered)
  }, [subCategorySelected])

  return (
    <VStack flex={1}>
      <HomeProduct name="Pesquisar" />
      <VStack flex={1} ml={-6} mt={-6}>
        <SubGroup
          onSelect={setSubCategorySelected}
          selected={subCategorySelected}
        />
        <Product subcategory={subCategorySelected} data={products} />
      </VStack>
    </VStack>
  )
}
