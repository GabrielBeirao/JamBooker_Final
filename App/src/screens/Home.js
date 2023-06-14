import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from '../context/dataContext'
import CustomButton from '../components/CustomButton';
import CustomButton2 from './../components/CustomButton2';

const Home = ({ navigation }) => {

  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, {state.name}</Text>
      <CustomButton2 text="Estúdios" onPress={() => navigation.navigate("Estúdios")} />
      <CustomButton2 text="Ensaios" onPress={() => navigation.navigate("Ensaios")} />
      <CustomButton2 text="Users" onPress={() => navigation.navigate("Users")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:'top',
    backgroundColor: '#c15eff'
    
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 40
  }
})

export default Home;