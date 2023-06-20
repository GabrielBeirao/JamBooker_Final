import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ensaios from './Ensaios';

const Stack = createNativeStackNavigator();

const EnsaioRoutes = ({ navigation }) => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="EnsaiosMain" component={Ensaios} />
            </Stack.Navigator>
    )
}

export default EnsaioRoutes;