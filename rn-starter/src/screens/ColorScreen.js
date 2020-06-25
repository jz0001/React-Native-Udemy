import React, {useState} from 'react'
import { View, StyleSheet, Button } from 'react-native'

const ColorScreen = () => {
    const [colors, addColors] = useState([])
    console.log(colors)
    return(
        <View>
            <Button 
                title="add color"
                onPress={()=>addColors([...colors, randomRGB()])} />
            {colors.map((color)=>{
                return <View style={{ height: 100, width: 100, backgroundColor: color}} />
            })}
        </View>
    )
}

const randomRGB = () => {
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}

const styles = StyleSheet.create({})

export default ColorScreen