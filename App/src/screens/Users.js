import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/dataContext'
import api from '../api';

const Users = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [users, setUsers] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/user/find');
            setUsers(list.data.users)
            dispatch({ type: "update", payload: false })
        }
        onScreenLoad();
    }, [state.update]
    )

    return (
        <View style={styles.view}>
            <FlatList
                data={users}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>

                            <Image style={{
                                width: 60,
                                height: 100,
                                margin: 50
                            }}
                                source={{ uri: "https://images.unsplash.com/photo-1589512842653-c7ccbec46027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" }}
                            />

                            <View style={styles.text}>
                                <Text style={styles.item}>{item.name}</Text>
                                <Text style={styles.title}>{item.email}</Text>
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

export default Users;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        paddingTop: 30,
        alignItems: "center",
        backgroundColor: '#ede9ea'

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