import { useEffect, useState } from 'react'
import { HomeProduct } from '@components/Product/HomeProduct'
import { VStack } from 'native-base'

import { PRODUCTS } from '../../data/products'

import { GroupSubCategory } from '../../components/Product/GroupSubcategory'
import { Product } from '@components/Product'
import { ProductCardProps } from '@components/Product/ProductCard'
import { CardCategory } from '@components/Category/CardCategory'

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
        product.category === categorySelected &&
        categorySelected,
    ) as ProductCardProps[]
    setProducts(filtered)
  }, [categorySelected, categorySelected])

  return (
    <VStack flex={1} ml={-6} mt={-6}>
      <CardCategory
        onSelect={setCategorySelected}
        selected={categorySelected}
      />
      <Product category={categorySelected} data={products} />
    </VStack>
  )
}
