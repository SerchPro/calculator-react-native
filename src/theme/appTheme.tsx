import { StyleSheet } from "react-native";




export const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor:'black'
    },
    calContainer:{
        flex:1,
        paddingHorizontal: 10,
        justifyContent:'flex-end'
    },
    result:{
        color: 'white',
        fontSize: 60,
        textAlign: 'right'
    },
    smallResult:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },

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