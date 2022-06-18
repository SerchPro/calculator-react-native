import React from 'react'
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style = {styles.calContainer}>
        <Text style = { styles.smallResult }> 1,500.00 </Text>
        <Text style = { styles.result }> 1,500.00 </Text>
        <View  style = {styles.row}>
          <Button text="c" color='#9B9B9B'/>
          <Button text="+/-" color='#9B9B9B'/>
          <Button text="del" color='#9B9B9B'/>
          <Button text="/" color='#FF9427'/>

        </View>
    </View>
  )
}
