import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { Context } from '../context/dataContext'
import CustomButton from '../components/CustomButton';
import CustomButton2 from './../components/CustomButton2';
import Logo from '../assets/images/logo.png';

const Home = ({ navigation }) => {

  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>

      <Image style={{
        width: 60,
        height: 60,
        borderRadius: 50,
        margin: 50
      }}
        source={{ uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }}
      />

      <Text style={styles.text}>Olá, {state.name}</Text>
      <Text style={styles.slogan}>A música começa aqui</Text>



      <CustomButton2 text="Estúdios" onPress={() => navigation.navigate("Estúdios")} />
      <CustomButton2 text="Ensaios" onPress={() => navigation.navigate("Ensaios")} />
      <CustomButton2 text="Users" onPress={() => navigation.navigate("Users")} />

      <Image 
        source={Logo}
        style={styles.logo}
        resizeMode="contain"
        />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'top',
    backgroundColor: '#ede9ea'

  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  slogan: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#c15eff',
    paddingBottom:30
  },

  logo: {

    margin: '30',
    height:'70px',
    width: '70px'
  }
})

export default Home;