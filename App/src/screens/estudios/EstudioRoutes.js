import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterEstudio from './RegisterEstudio';
import Estudios from './Estudios';
import RegisterEnsaio from '../ensaios/RegisterEnsaio';
import EstudioEnsaios from '../ensaios/EstudioEnsaios';

const Stack = createNativeStackNavigator();

const EstudioRoutes = ({ navigation }) => {
    
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="MainEstudios" component={Estudios} />
                <Stack.Screen name="RegisterEstudio" component={RegisterEstudio} />
                <Stack.Screen name="RegisterEnsaio" component={RegisterEnsaio} />
                <Stack.Screen name="EstudioEnsaios" component={EstudioEnsaios} />
            </Stack.Navigator>
    )
}

export default EstudioRoutes;