import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/dataContext';
import api from '../../api';

const EstudioEnsaios = ({ navigation }) => {

    const { state } = useContext(Context)

    const [ensaios, setEnsaios] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/ensaio/findByEstudio', {
                params: {
                    idEstudio: state.idEstudio,
                },
            }).then((res) => setEnsaios(res.data.ensaios))
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
                                <Text style={styles.title}>{item.data}</Text>
                                <Text style={styles.title}>{item.hora}</Text>
                                <Text style={styles.item}>Agendado por: {item.user.name}</Text>
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

export default EstudioEnsaios;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        alignItems: 'center'
    },
    text: {
        height: 120,
        width: '100%',
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        margin: 10,
        textAlign: 'center'
    },
    item: {
        margin: 10,
        fontSize: 15
    },
    icon: {
        margin: 10
    },
    myStarStyle: {
        color: 'orange',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        width: 50,
        fontSize: 50
    },
    myEmptyStarStyle: {
        color: 'gray',
        width: 50,
        fontSize: 50
    }
});