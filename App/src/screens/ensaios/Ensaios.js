import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/dataContext'
import api from '../../api'

const EnsaiosUsuario = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [ensaios, setEnsaios] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/ensaio/findByUser', {
                params: {
                    idUser: state.idUser,
                  }
            });
            console.log(list);
            setEnsaios(list.data.ensaios)
            dispatch({type: "update", payload: false})
        }
        onScreenLoad();
    }, [state.update]
    )

    return (
        <View style={styles.view}>
            <FlatList
                data={ensaios}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <View style={styles.text}>
                                <Text style={styles.title}>{item.estudio.name}</Text>
                                <Text style={styles.item}>{item.data}</Text>
                                <Text style={styles.item}>{item.hora}</Text>
                            </View>
                        </View>
                    )
                }
                }
                keyExtractor={(item) => item.id}
            />
        </View>


    )
}

export default EnsaiosUsuario;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        paddingTop: 30,
        backgroundColor: '#ede9ea',

    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#b1fa00'
    },

    text: {
        height: 60,
        width: 260,
        margin:5,
        paddingLeft:30
      
    },
    title: {
        fontSize: 14,
        fontWeight:'bold'

    },
    item: {
        fontSize: 14
    }


});