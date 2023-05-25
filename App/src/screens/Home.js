import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import { Context, Provider } from '../context/dataContext'

const Home = () => {

  const actualState = useContext(Context)

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <Text style={styles.text}>{actualState.state.counter}</Text>
        <Button
          title="Aumentar"
          onPress={() => actualState.dispatch({type:"aumentar", payload: 1})}
        />
        <Button
          title="Diminuir"
          onPress={() => actualState.dispatch({type:"diminuir", payload: 1})}
        />
        <Button
          title="Zerar"
          onPress={() => actualState.dispatch({type:"zerar"})}
        />

        { actualState.state.showMessage ? <Text>TEKPIX É A FILMADORA MAIS VENDIDA DO BRASIL!</Text> : null }

        <Button
          title="Mostrar Mensagem Secreta"
          onPress={() => actualState.dispatch({type:"mostrar"})}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    text: {
      fontSize: 30
    }
})

export default () => {
  return (
      <Provider>
          <Home />
      </Provider>
  )
}