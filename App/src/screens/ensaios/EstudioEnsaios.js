import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/dataContext';
import api from '../../api';
import { Entypo } from '@expo/vector-icons';

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
                            <Entypo
                                name="squared-plus"
                                size={40}
                                color="#b1fa00"
                                style={styles.icon}
                            />
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
        paddingTop: 30,
        backgroundColor: '#ede9ea',
        alignItems: 'center'

    },
    button: {
        marginBottom: 20
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
        justifyContent: "center",
        width: '70%',
      
        
    },
    title: {
        fontSize: 14,
        fontWeight:'bold'

    },
    item: {
        fontSize: 14
    },
    icon: {
        margin: 10,
    }
});