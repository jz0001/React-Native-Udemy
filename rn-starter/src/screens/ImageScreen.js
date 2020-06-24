import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title='forest'/>
            <ImageDetail title='mountains'/>
            <ImageDetail title='river'/>
            <ImageDetail title='city'/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageScreen