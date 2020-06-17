import React, { Fragment } from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";

const HomeScreen = () => {
  let name="Jinming"
  return (
    <Fragment>
      <Text style={styles.text1}>Getting started</Text>
      <Text style={styles.text2}>My name is {name}</Text>
    </Fragment>
  // <View style={{
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }}>
  //   <Text style={styles.text}>Hi there! No matter what happens, we are all in this together. Don't lose hope, and here is a puppy picture for ya:</Text>
  //   <Image 
  //     source={{uri: "https://i.redd.it/rgwtb019m9451.jpg"}} 
  //     style={styles.puppy}
  //   />
  //   <Button
  //     title="I Understand!"
  //   />
  // </View>
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
