import { ProductCardProps } from '@components/ProductCard'
import { ImageProps } from 'react-native'

interface ProductProps {
  id: string
  brand: string
  subcategory: string
  name: string
  price: string
  unity: string
  thumb: ImageProps['source']
  image: ImageProps['source']
  description: string
  observation: string
}

export const PRODUCTS: ProductProps[] = [
  {
    id: '1',
    brand: 'Tang',
    subcategory: 'Carnes Bovinas',
    name: 'Refresco para misturar com leite Sabor Morango',
    price: '8,94',
    unity: '125G',
    thumb: require('../assets/img/carne.png'),
    image: require('../assets/img/carne.png'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    observation:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: '2',
    brand: 'Tang',
    subcategory: 'Carnes Bovinas',
    name: 'Refresco para misturar com leite Sabor Morango',
    price: '8,94',
    unity: '125G',
    thumb: require('../assets/img/carne.png'),
    image: require('../assets/img/carne.png'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    observation:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: '3',
    brand: 'Tang',
    subcategory: 'Carnes Bovinas',
    name: 'Refresco para misturar com leite Sabor Morango',
    price: '8,94',
    unity: '125G',
    thumb: require('../assets/img/carne.png'),
    image: require('../assets/img/carne.png'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    observation:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: '4',
    brand: 'Tang',
    subcategory: 'Carnes Bovinas',
    name: 'Refresco para misturar com leite Sabor Morango',
    price: '8,94',
    unity: '125G',
    thumb: require('../assets/img/carne.png'),
    image: require('../assets/img/carne.png'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    observation:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: '5',
    brand: 'Tang',
    subcategory: 'Carnes Bovinas',
    name: 'Refresco para misturar com leite Sabor Morango',
    price: '8,94',
    unity: '125G',
    thumb: require('../assets/img/carne.png'),
    image: require('../assets/img/carne.png'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    observation:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: '6',
    brand: 'Tang',
    subcategory: 'Aves',
    name: 'Refresco para misturar com leite Sabor Morango',
    price: '8,94',
    unity: '125G',
    thumb: require('../assets/img/carne.png'),
    image: require('../assets/img/carne.png'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    observation:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: '7',
    brand: 'Tang',
    subcategory: 'Aves',
    name: 'Refresco para misturar com leite Sabor Morango',
    price: '8,94',
    unity: '125G',
    thumb: require('../assets/img/carne.png'),
    image: require('../assets/img/carne.png'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    observation:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: '9',
    brand: 'Tang',
    subcategory: 'Peixes',
    name: 'Refresco para misturar com leite Sabor Morango',
    price: '8,94',
    unity: '125G',
    thumb: require('../assets/img/carne.png'),
    image: require('../assets/img/carne.png'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    observation:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    id: '10',
    brand: 'Tang',
    subcategory: 'Linguiças',
    name: 'Refresco para misturar com leite Sabor Morango',
    price: '8,94',
    unity: '125G',
    thumb: require('../assets/img/carne.png'),
    image: require('../assets/img/carne.png'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    observation:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
]
