import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MainContainer from './navigation/MainContainer';
import Login from './component/login';



const App = () => {
  //getCities()
  return (
    <Login/>

    
    // <View style={styles.container}>
    //   <MainContainer />
    // </View>
    //<MainContainer />
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});