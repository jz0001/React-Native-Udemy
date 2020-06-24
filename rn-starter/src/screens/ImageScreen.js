import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title='forest' image={require('../../assets/forest.jpg')}/>
            <ImageDetail title='mountains' image={require('../../assets/mountain.jpg')}/>
            <ImageDetail title='river' image={require('../../assets/beach.jpg')}/>
            <ImageDetail title='city' image={require('../../assets/forest.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageScreen