import React, {useState} from 'react'
import { View, StyleSheet, Button } from 'react-native'

const ColorScreen = () => {
    const [colors, addColors] = useState([])
    return(
        <View>
            <Button title="add color"/>
            {colors.forEach((color)=>{
                return <View backgroundColor=></View>
            })}
        </View>
    )
}

const styles = StyleSheet.create({})

export default ColorScreen