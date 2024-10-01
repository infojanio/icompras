import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { Initial } from '@screens/Initial'
import { Localization } from '@screens/Localization'
import { AppRoutes } from './app.routes'
import { BottomRoutes } from './bottom.routes'
import { SignIn } from '@screens/SignIn'
import { SignUp } from '@screens/SignUp'

import { CitySelect } from '@screens/CitySelect'
import { CompaniesByTenant } from '@screens/Company/CompaniesByTenant'
import { TenantsByCity } from '@screens/Tenant/TenantsByCity'
import { Home } from '@screens/Home'

type StackRoutes = {
  initial: undefined
  cityselect: undefined

  homeScreen: { cityId: string }
  signin: undefined
  signup: undefined

  //supermarket: undefined
  //forgotPassword: undefined
  // address: undefined
  localization: undefined
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
      <Screen name="signin" component={SignIn} />
      <Screen name="signup" component={SignUp} />

      <Screen name="cityselect" component={CitySelect} />
      <Screen name="homeScreen" component={AppRoutes} />

      <Screen name="localization" component={Localization} />
    </Navigator>
  )
}
