import React, {useState} from 'react'
import { View, StyleSheet, Button } from 'react-native'

const ColorScreen = () => {
    const [colors, addColors] = useState([])
    console.log(colors)
    return(
        <View>
            <Button 
                title="add color"
                onPress={()=>addColors([...colors, 1])} />
            {colors.forEach((color)=>{
                return <View style={{ height: 100, width: 100, backgroundColor: "rgb(0,255,1)"}} />
            })}
        </View>
    )
}

const styles = StyleSheet.create({})

export default ColorScreen