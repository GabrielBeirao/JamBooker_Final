import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import React, { useContext, useState } from 'react';
import api from '../../api';
import Logo from '../../assets/images/logo.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Context } from "../../context/dataContext";
import { Entypo } from "@expo/vector-icons";

const RegisterEnsaio = ({ navigation }) => {

    const { state, dispatch } = useContext(Context);

    const [idUser, setidUser] = useState(state.idUser);
    const [idEstudio, setidEstudio] = useState(state.idEstudio);
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');

    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
        try {
            const authData = await api.post("/ensaio/register", {
                idUser: idUser,
                idEstudio: idEstudio,
                data: data,
                hora: hora,
            });
            if (authData.status === 200) {
                alert(authData.data.message)
                setComment("")
                setStars("")
                dispatch({ type: "update", payload: true })
            }
            else {
                console.log(authData.data.message)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />

            <CustomInput
                value={state.nameEstudio}
                editable={false}
            />

            <CustomInput
                value={state.name}
                editable={false}
            />

            <CustomInput
                placeholder="Data"
                value={data}
                setValue={setData}
            />

            <CustomInput
                placeholder="Hora"
                value={hora}
                setValue={setHora}
            />

            <CustomButton text="Register" onPress={onRegisterPressed} />
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    loginText: {
        fontWeight: "bold",
        color: "#6200ee",
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

export default RegisterEnsaio;