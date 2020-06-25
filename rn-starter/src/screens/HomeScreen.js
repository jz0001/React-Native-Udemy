import React, { Fragment } from "react";
import { Text, StyleSheet, View, Image, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  // let name="Jinming"
  console.log(props)
  return (
    // <Fragment>
    //   <Text style={styles.text1}>Getting started</Text>
    //   <Text style={styles.text2}>My name is {name}</Text>
    // </Fragment>
  <View style={{
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Text style={styles.text}>Hi there! No matter what happens, we are all in this together. Don't lose hope, and here is a puppy picture for ya:</Text>
    <Image 
      source={{uri: "https://i.redd.it/rgwtb019m9451.jpg"}} 
      style={styles.puppy}
    />
    <Button
      title="I Understand!"
      onPress={(event) => console.log(event.target)}
    />
    <TouchableOpacity onPress={()=>props.navigation.navigate("Image")}>
      <Text>I understand!</Text>
      <Image 
      source={{uri: "https://i.redd.it/rgwtb019m9451.jpg"}} 
      style={styles.puppy}
    />
    </TouchableOpacity>
    <Button
      title="Counter"
      onPress={() => props.navigation.navigate("Counter")}
    />
    <Button
      title="Color"
      onPress={() => props.navigation.navigate("Color")}
    />
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center"
  },
  puppy: {
    resizeMode: "center",
    width: 250,
    height: 250,
  },
  text1: {fontSize: 45},
  text2: {fontSize: 20},
});

export default HomeScreen;
