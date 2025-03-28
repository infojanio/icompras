import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { Localization } from '@screens/Localization'
import { AppRoutes } from './app.routes'
import { SignIn } from '@screens/SignIn'
import { SignUp } from '@screens/SignUp'

import { Home } from '@screens/Home'

type AuthRoutes = {
  home: { userId: string }
  signin: undefined
  signup: undefined
  localization: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="signin" screenOptions={{ headerShown: false }}>
      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={SignUp} />

      <Screen name="localization" component={Localization} />
      <Screen name="home" component={Home} />
    </Navigator>
  )
}
