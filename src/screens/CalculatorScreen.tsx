import React from 'react'
import { Text, View } from 'react-native';
import { style } from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style = {style.calContainer}>
        <Text style = { style.smallResult }> 1,500.00 </Text>
        <Text style = { style.result }> 1,500.00 </Text>
        <View >
          <View style = { style.button}>
            <Text style = {style.textButton }> 1 </Text>
          </View>
        </View>
    </View>
  )
}
