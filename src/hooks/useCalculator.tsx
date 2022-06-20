import  { useRef , useState} from 'react';

enum Operators {
    add, substract, multiply, divide
  }

export const useCalculator = () => {

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


    return {
        calculate,
        btnAdd,
        btnSubstract,
        btnMultiply,
        btnDivide,
        positiveNegative,
        createNumber,
        btnDelete,
        clean,
        lastOperation,
        number,
        beforeNumber
    }
}
