import { useEffect, useState } from 'react'
import { HomeProduct } from '@components/Product/HomeProduct'
import { VStack } from 'native-base'

import { PRODUCTS } from '../../data/products'

import { GroupSubCategory } from '../../components/Product/GroupSubcategory'
import { Product } from '@components/Product'
import { ProductCardProps } from '@components/Product/ProductCard'

export function ProductCategory() {
  const [categorySelected, setCategorySelected] = useState('Carnes & Peixes')

  const [subCategorySelected, setSubCategorySelected] = useState(
    'Carnes Bovinas',
  )
  const [products, setProducts] = useState<ProductCardProps[]>([])

  useEffect(() => {
    //filtra subcategoria de acordo a categoria
    const filtered = PRODUCTS.filter(
      (product) =>
        product.category &&
        product.subcategory === categorySelected &&
        subCategorySelected,
    ) as ProductCardProps[]
    setProducts(filtered)
  }, [categorySelected, subCategorySelected])

  return (
    <VStack flex={1} ml={-6} mt={-6}>
      <GroupSubCategory
        onSelect={setCategorySelected}
        selected={categorySelected}
      />
      <Product subcategory={categorySelected} data={products} />
    </VStack>
  )
}
