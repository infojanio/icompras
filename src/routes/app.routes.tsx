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

type AppRoutes = {
  home: undefined
  search: undefined
  cart: undefined
  request: undefined
  profile: undefined

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
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
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
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <SearchSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => (
            <CartSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="request"
        component={Request}
        options={{
          tabBarIcon: ({ color }) => (
            <RequestSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />

      {/*  Inserir uma rota pra não aparecer o ícone no tabBar 
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarButton: () => null,
        }} //não mostra ícone
      />
      */}
    </Navigator>
  )
}
