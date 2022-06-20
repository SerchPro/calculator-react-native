import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {


  const [ number, setNumber ] = useState('0');
  const [ beforeNumber, setBeforeNumber] = useState('0')

  const clean = () =>{
    console.log("click")
    setNumber('0')
  }
  
  const createNumber = ( textNumber: string) => {
    if(number.includes('.') && textNumber === '.') return;
    if( number.startsWith('0') || number.startsWith('-0')){

      // decimal point
      if( textNumber === '.'){
        setNumber( number + textNumber )

        // Evaluate if there is another zero and there is a point
      }else if( textNumber === '0' && number.includes('.')) {
        setNumber( number + textNumber );

        // Evaluate if it is different to zero and there is not a point 
      }else if( textNumber !== '0' && !number.includes('.') ){
        setNumber( textNumber );

      }else if( textNumber === '0' && !number.includes('.')){
        setNumber( number )
      }else{
        setNumber( number + textNumber )
      }

    }else{
      setNumber( number + textNumber )
    }
  }

  const positiveNegative = () =>{
    if ( number.includes('-')){
      setNumber( number.replace( '-', '' ));
    }else{
      setNumber( '-' + number );
    }
  }


  return (
    <View style = {styles.calContainer}>
        <Text style = { styles.smallResult }> { beforeNumber } </Text>
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
          <Button text="del" color='#9B9B9B' action = {clean}/>
          <Button text="/" color='#FF9427' action = {clean}/>
        </View>

        <View  style = {styles.row}>
          <Button text="7"  action = { createNumber } />
          <Button text="8"  action = { createNumber } />
          <Button text="9"  action = { createNumber } />
          <Button text="x" color='#FF9427' action = {clean}/>
        </View>

        <View  style = {styles.row}>
          <Button text="4" action = { createNumber }  />
          <Button text="5" action = { createNumber } />
          <Button text="6" action = { createNumber }  />
          <Button text="-" color='#FF9427' action = {clean}/>
        </View>

        <View  style = {styles.row}>
          <Button text="1" action = { createNumber }  />
          <Button text="2" action = { createNumber } />
          <Button text="3" action = { createNumber }  />
          <Button text="+" color='#FF9427' action = {clean}/>
        </View>

        <View  style = {styles.row}>
          <Button text="0" big action = { createNumber }  />
          <Button text="." action = { createNumber }  />
          <Button text="=" color='#FF9427' action = {clean}/>
        </View>
    </View>
  )
}
