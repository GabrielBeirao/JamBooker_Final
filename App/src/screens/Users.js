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
                                height: 60,
                                borderRadius:50,
                                margin: 50
                            }}
                                source={{ uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }}
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
        alignItems: "center",
        backgroundColor: '#ede9ea',


    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 5,
        backgroundColor: '#b1fa00',
        alignItems: 'center',
        width:270,
        height:'40%'
 
    },
    text: {
        height: 120,
        width: '100%',
        justifyContent: "center",
        width:270,
        height:'10%',
        borderRadius:50
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
    }
});