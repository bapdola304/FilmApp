import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'
import imgLaptop from '../assets/images/laptop.png'
export default function ListItem(props){
    return <View style = {styles.container}>
        <Text style = {styles.title}>Laptop</Text>
        <Image source = {imgLaptop} />
    </View>
}

const styles = StyleSheet.create({
    title  : {
        alignItems : 'center',
        fontWeight : 'bold',
        textAlign: 'center',
        fontSize: 100
    },
    container : {
        shadowColor : '#FFF',

    }
})
