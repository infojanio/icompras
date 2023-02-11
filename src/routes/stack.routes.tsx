import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { Initial } from '@screens/Initial'
import { Localization } from '@screens/Localization'
import { AppRoutes } from './app.routes'
import { SignUp } from '@screens/SignUp'
import { SuperMarket } from '@screens/SuperMarket'

type StackRoutes = {
  initial: undefined
  signup: undefined
  supermarket: undefined
  localization: undefined
  home: undefined
}

export type StackNavigatorRoutesProps = NativeStackNavigationProp<StackRoutes>

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName="initial"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="initial" component={Initial} />
      <Screen name="signup" component={SignUp} />
      <Screen name="supermarket" component={SuperMarket} />
      <Screen name="localization" component={Localization} />
      <Screen name="home" component={AppRoutes} />
    </Navigator>
  )
}
