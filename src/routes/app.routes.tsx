import { Platform } from 'react-native'
import { useTheme } from 'native-base'

import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'

import HomeSvg from '@assets/home.svg'
import SearchSvg from '@assets/search.svg'
import CartSvg from '@assets/cart.svg'
import RequestSvg from '@assets/request.svg'
import ProfileSvg from '@assets/profile.svg'

import { Home } from '@screens/Home'
import { Search } from '@screens/Search'

import { Cart } from '@screens/Cart'
import { Request } from '@screens/Request'
import { Profile } from '@screens/Profile'
import { ProductList } from '@screens/Product/ProductList'
import { ProductDetails } from '@screens/Product/ProductDetails'

import { ProductBySubCategory } from '@screens/Product/ProductBySubCategory'

import { CategoryDetails } from '@components/Category/desc/CategoryDetails'
import { Category } from '@components/Category'

type AppRoutes = {
  home: { UserId: string }
  //homeScreen: { UserId: string } // undefined
  search: undefined
  cart: undefined
  request: undefined
  profile: undefined
  productList: undefined
  signUp: undefined

  productDetails: { productId: string }
  productBySubCategory: { categoryId: string }
  category: undefined
  categoryDetails: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

//rotas da aplicação
export function AppRoutes() {
  //definição do tamanho dos ícones
  const { sizes, colors } = useTheme()
  const iconSize = sizes[6]

  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        //  tabBarShowLabel: true,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.blueGray[800],
        tabBarStyle: {
          backgroundColor: colors.gray[100],
          borderTopWidth: 1,
          height: Platform.OS === 'android' ? 'auto' : 60,
          paddingBottom: sizes[2],
          paddingTop: sizes[2],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="search"
        component={Search}
        options={{
          title: 'Pesquisar',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <SearchSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="cart"
        component={Cart}
        options={{
          title: 'Carrinho',
          headerStyle: {
            backgroundColor: '#c6c9c1',
          },
          headerTintColor: '#272525',
          headerTitleStyle: {
            fontSize: 18,
          },

          tabBarIcon: ({ color }) => (
            <CartSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="request"
        component={Request}
        options={{
          title: 'Pedidos',
          headerStyle: {
            backgroundColor: '#c6c9c1',
          },
          headerTintColor: '#272525',
          headerTitleStyle: {
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 18,
          },
          tabBarIcon: ({ color }) => (
            <RequestSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          title: 'Perfil',

          headerStyle: {
            backgroundColor: '#c6c9c1',
          },

          headerTintColor: '#272525',
          headerTitleStyle: {
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 18,
          },

          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="productList"
        component={ProductList}
        options={{
          tabBarButton: () => null,
        }} //não mostra ícone
      />

      <Screen
        name="productDetails"
        component={ProductDetails}
        options={{
          tabBarButton: () => null,
        }} //não mostra ícone
      />

      <Screen
        name="categoryDetails"
        component={CategoryDetails}
        options={{
          tabBarButton: () => null,
        }} //não mostra ícone
      />

      <Screen
        name="category"
        component={Category}
        options={{
          tabBarButton: () => null,
        }} //não mostra ícone
      />

      <Screen
        name="productBySubCategory"
        component={ProductBySubCategory}
        options={{
          tabBarButton: () => null,
        }} //não mostra ícone
      />
    </Navigator>
  )
}
