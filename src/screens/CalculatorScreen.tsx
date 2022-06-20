import React from 'react'
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';


export const CalculatorScreen = () => {

  const { calculate,
    btnAdd,
    btnSubstract,
    btnMultiply,
    btnDivide,
    positiveNegative,
    createNumber,
    btnDelete,
    clean,
    number,
    beforeNumber }  = useCalculator()


  return (
    <View style = {styles.calContainer}>

        {
          ( beforeNumber !== '0' ) && (
            <Text style = { styles.smallResult }> { beforeNumber } </Text>
          )
        }

        <Text 
            style = { styles.result }
            numberOfLines = {1}
            adjustsFontSizeToFit
            > 
            
            { number }

        </Text>

        <View  style = {styles.row}>
          <Button text="c" color='#9B9B9B' action = {clean} />
          <Button text="+/-" color='#9B9B9B' action = {positiveNegative}/>
          <Button text="del" color='#9B9B9B' action = {btnDelete}/>
          <Button text="/" color='#FF9427' action = {btnDivide}/>
        </View>

        <View  style = {styles.row}>
          <Button text="7"  action = { createNumber } />
          <Button text="8"  action = { createNumber } />
          <Button text="9"  action = { createNumber } />
          <Button text="x" color='#FF9427' action = {btnMultiply}/>
        </View>

        <View  style = {styles.row}>
          <Button text="4" action = { createNumber }  />
          <Button text="5" action = { createNumber } />
          <Button text="6" action = { createNumber }  />
          <Button text="-" color='#FF9427' action = {btnSubstract}/>
        </View>

        <View  style = {styles.row}>
          <Button text="1" action = { createNumber }  />
          <Button text="2" action = { createNumber } />
          <Button text="3" action = { createNumber }  />
          <Button text="+" color='#FF9427' action = {btnAdd}/>
        </View>

        <View  style = {styles.row}>
          <Button text="0" big action = { createNumber }  />
          <Button text="." action = { createNumber }  />
          <Button text="=" color='#FF9427' action = {calculate}/>
        </View>
    </View>
  )
}
