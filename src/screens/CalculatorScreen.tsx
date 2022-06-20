import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';


enum Operators {
  add, substract, multiply, divide
}

export const CalculatorScreen = () => {


  const [ number, setNumber ] = useState('0');
  const [ beforeNumber, setBeforeNumber] = useState('0');

  const lastOperation = useRef<Operators>()

  const clean = () =>{
    setNumber('0');
    setBeforeNumber('0');
  }

  const btnDelete = () =>{

    if(number.length  == 1 && number.includes('0')) return;

    if(number.length  == 1  ) setNumber( '0' );

    if(number.length > 1) setNumber( number.substring(0, number.length -1) );

    if(number.length  == 2 && number.includes('-'))  setNumber( '0' );
    
    if(number.length  == 1  ) setNumber( '0' );

    /**
     * let negative = '';
     * let numTemp = number;
     * if( number.includes('-') ){
     *    negative = '-'
     *    numTemp = number.substr(1);
     * }
     * 
     * if( numTemp.length > 1){
     *  setNumber( negative + numTemp.slice(0,-1))
     * } else{
     *  setNumber('0');
     * }
     */
  }

  const changeNumToPrevious = () =>{
    if(number.endsWith('.')){
      setBeforeNumber( number.slice(0,-1) )
    } else{
      setBeforeNumber(number)
    }
    setNumber( '0' );
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


  //  add, substract, multiply, divide

  const btnDivide = () =>{
    changeNumToPrevious();
    lastOperation.current = Operators.divide
  };

  const btnMultiply = () =>{
    changeNumToPrevious();
    lastOperation.current = Operators.multiply
  }

  const btnSubstract = () =>{
    changeNumToPrevious();
    lastOperation.current = Operators.substract
  }

  const btnAdd = () =>{
    changeNumToPrevious();
    lastOperation.current = Operators.add
  }



  const calculate = () =>{
    
    const num1 = Number( number );
    const num2 = Number( beforeNumber );

    switch ( lastOperation.current) {
      case Operators.add:
        setNumber( `${ num1 + num2}`)
        setBeforeNumber( '0' );
        break;
      case Operators.substract:
        setNumber( `${ num2 - num1}`)
        setBeforeNumber( '0' );
        break;
      case Operators.multiply:
        setNumber( `${ num1 * num2}`)
        setBeforeNumber( '0' );
        break;
      case Operators.divide:
        setNumber( `${  num2 / num1}`)
        setBeforeNumber( '0' );
        break;
    
      default:
        break;
    }
  }


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
