import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { Localization } from '../screens/Localization'
import { Initial } from '@screens/Initial'

type StackRoutes = {
  initial: undefined
  localization: undefined
}

export type StackNavigatorRoutesProps = NativeStackNavigationProp<StackRoutes>
const { Navigator, Screen } = createNativeStackNavigator<StackRoutes>()

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="localization" component={Localization} />
      <Screen name="initial" component={Initial} />
    </Navigator>
  )
}
