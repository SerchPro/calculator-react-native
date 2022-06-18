import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const Button = () => {
  return (
    <View style = { styles.button}>
        <Text style = {styles.textButton }> 1 </Text>
    </View>
  )
}



const styles = StyleSheet.create({
    button:{
        height: 80,
        width:80,
        backgroundColor:'#9B9B9B',
        borderRadius:100,
        justifyContent: 'center'
    },
    textButton:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:'black',
        fontWeight: '300'
    }
})