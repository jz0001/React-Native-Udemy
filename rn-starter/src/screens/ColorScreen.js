import React, {useState} from 'react'
import { View, StyleSheet, Button, FlatList } from 'react-native'

const ColorScreen = () => {
    const [colors, addColors] = useState([])
    return(
        <View>
            <Button 
                title="add color"
                onPress={()=>addColors([...colors, randomRGB()])} />
            {/* {colors.map((color)=>{
                return <View style={{ height: 100, width: 100, backgroundColor: color}} />
            })} */}
            <FlatList 
                keyExtractor={(item)=>item}
                data={colors}
                renderItem={(item)=>{
                    console.log(item)
                    return <View style={{ height: 100, width: 100, backgroundColor: item.item}} />
                }} />
        </View>
    )
}

const randomRGB = () => {
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}

const styles = StyleSheet.create({})

export default ColorScreen