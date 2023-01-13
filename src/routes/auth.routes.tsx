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
import { SignUp } from '@screens/SignUp'
import { SignIn } from '@screens/SignIn'
import { ProductList } from '@screens/ProductList'


type AuthRoutes = {
  initial: undefined
  address: undefined
  localization: undefined
  home: undefined
  search: undefined
  cart: undefined
  request: undefined
  profile: undefined
  signUp: undefined
  signIn: undefined
  productList: undefined
}

export type AuthNavigatorRoutesProps = BottomTabNavigationProp<AuthRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AuthRoutes>()

//rotas da aplicação
export function AuthRoutes() {
  //definição do tamanho dos ícones
  const { sizes, colors } = useTheme()
  const iconSize = sizes[8]

  return (
    <Navigator
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.blueGray[600],
        tabBarStyle: {
          backgroundColor: colors.gray[100],
          borderTopWidth: 1,
          height: Platform.OS === 'android' ? 60 : 96,
          paddingBottom: sizes[2],
          paddingTop: sizes[2],
        },
      }}
    >




      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="search"
        component={Search}
        options={{
          tabBarLabel: 'Pesquisar',
          tabBarIcon: ({ color }) => (
            <SearchSvg fill={color} width={iconSize} height={iconSize} />
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
        name="cart"
        component={SignIn}
        options={{
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({ color }) => (
            <CartSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="request"
        component={SignIn}
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ color }) => (
            <RequestSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="profile"
        component={SignIn}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />



      {/*  Inserir uma rota pra não aparecer o ícone no tabBar */}
      <Screen
        name="signUp"
        component={SignUp}
        options={{
          tabBarButton: () => null,
        }} //não mostra ícone
      />
    </Navigator>
  )
}
