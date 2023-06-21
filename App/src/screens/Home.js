import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from '../context/dataContext'
import CustomButton from '../components/CustomButton';
import CustomButton2 from './../components/CustomButton2';


const Home = ({ navigation }) => {

  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>
     
      <Text style={styles.text}>Olá, {state.name}</Text>
      <Text style={styles.slogan}>A música começa aqui</Text>

      <Image style={{
        width: 60,
        height: 60,
        borderRadius:50,
        margin:20
      }}
      source={{uri:"https://images.unsplash.com/photo-1619418917687-0513820d96f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"}}
      />
   
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
    backgroundColor: '#ede9ea'
    
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop:50
  },
  slogan: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#c15eff'
  }
})

export default Home;