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
                                <Text style={styles.item}>{item.estudio.name}</Text>
                                <Text style={styles.title}>{item.data}</Text>
                                <Text style={styles.title}>{item.hora}</Text>
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
        alignItems: "center",
        backgroundColor: '#c15eff'

    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#b1fa00',
        alignItems: 'center'
    },
    text: {
        height: 120,
        width: '100%',
        justifyContent: "center",
    },
    title: {
        fontSize: 15,
        margin: 5,
        textAlign: 'center'
    },
    item: {
        margin: 5,
        fontSize: 15,
        fontWeight: 'bold'
    },
    icon: {
        margin: 10
    },
    myStarStyle: {
        color: 'black',
        backgroundColor: 'transparent',
        // textShadowColor: 'black',
        // textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        width: '40%',
        fontSize: 30
    },
    myEmptyStarStyle: {
        color: 'gray',
        width: 50,
        fontSize: 30
    }
});