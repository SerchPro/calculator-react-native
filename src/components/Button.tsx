import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


interface Props{
    text: string,
    color?:string,
    big?: boolean
}

export const Button = ({text, color = '#2D2D2D', big = false}: Props) => {
  return (
    <TouchableOpacity>
        <View style = {{
            ... styles.button,
            backgroundColor: color,
            width: (big) ? 180 : 80
            }}>
            <Text style = {{
                    ...styles.textButton,
                    color: (color === '#9B9B9B') ? 'black': 'white'
                }}> {text} </Text>
        </View>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    button:{
        height: 80,
        width:80,
        backgroundColor:'#2D2D2D',
        borderRadius:100,
        justifyContent: 'center',
        marginHorizontal:10
    },
    textButton:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:'white',
        fontWeight: '300'
    }
})