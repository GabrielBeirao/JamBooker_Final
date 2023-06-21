import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/dataContext';
import api from '../../api';
import { Entypo } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';

const Estudios = ({ navigation }) => {
    const { state, dispatch } = useContext(Context);

    const [estudios, setEstudios] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/estudio/find');
            setEstudios(list.data.estudios);
            dispatch({ type: "update", payload: false });
        }
        onScreenLoad();
    }, [state.update]
    )

    const seeReview = async (item) => {
        await dispatch({ type: 'setEstudio', payload: item });
        navigation.navigate('EstudioEnsaios');
    }

    const newReview = async (item) => {
        await dispatch({ type: 'setEstudio', payload: item });
        navigation.navigate('RegisterEnsaio');
    }

    return (
        <View style={styles.view}>
            {state.isAdmin ? (
                <CustomButton  text="Novo Estúdio" onPress={() => navigation.navigate("RegisterEstudio")} />
            ) : (
                <></>
            )}
            <FlatList
                data={estudios}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.text} onPress={() => seeReview(item)}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.item}>{item.type}</Text>
                                <Text style={styles.item}>{item.description}</Text>
                                <Text style={styles.item}>{item.address}</Text>
                            </TouchableOpacity>
                            <Entypo
                                name="squared-plus"
                                size={60}
                                color="black"
                                style={styles.icon}
                                onPress={() => newReview(item)}
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

export default Estudios;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        paddingTop: 30,
        alignItems: "center",
        backgroundColor: '#ede9ea',

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
        width: '70%',
        justifyContent: "center",
    },
    title: {
        fontSize: 30
    },
    item: {
        fontSize: 15
    },
    icon: {
        margin: 10,
    }
});