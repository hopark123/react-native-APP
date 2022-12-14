import React from 'react'

import {InquiryScreen, InquiryListScreen} from '.'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const InquiryStack = createMaterialTopTabNavigator()

export function InquiryTabScreen({}) {
  return (
    <InquiryStack.Navigator
      screenOptions={{tabBarIndicatorStyle: {backgroundColor: '#17D3F0'}}}>
      <InquiryStack.Screen name="문의하기" component={InquiryScreen} />
      <InquiryStack.Screen name="문의내역" component={InquiryListScreen} />
    </InquiryStack.Navigator>
  )
}
