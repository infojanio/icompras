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
import { CartVazio } from '@components/CartVazio'
import { Request } from '@screens/Request'
import { Profile } from '@screens/Profile'
import { ProductList } from '@screens/ProductList'
import { Localization } from '@screens/Localization'
import { SignUp } from '@screens/SignUp'
import { StackRoutes } from './stack.routes'

type AppRoutes = {
  homeScreen: undefined
  search: undefined
  cart: undefined
  cartVazio: undefined
  request: undefined
  profile: undefined
  productList: undefined
  signUp: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

//rotas da aplicação
export function AppRoutes() {
  //definição do tamanho dos ícones
  const { sizes, colors } = useTheme()
  const iconSize = sizes[8]

  return (
    <Navigator
      initialRouteName="homeScreen"
      screenOptions={{
        headerShown: false,
        //  tabBarShowLabel: true,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.blueGray[800],
        tabBarStyle: {
          backgroundColor: colors.gray[100],
          borderTopWidth: 1,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: sizes[8],
          paddingTop: sizes[6],
        },
      }}
    >
      <Screen
        name="homeScreen"
        component={Home}
        options={{
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
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <SearchSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      <Screen
        name="cartVazio"
        component={CartVazio}
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
    </Navigator>
  )
}
