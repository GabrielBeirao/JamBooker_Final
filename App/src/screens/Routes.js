import { StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'

import { Context } from '../context/dataContext'

import Home from './Home'
import RestaurantRoutes from './restaurant/RestaurantRoutes'
import ReviewRoutes from './review/ReviewRoutes'
import Users from './Users'

const Tab = createBottomTabNavigator();

const Routes = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)
    return (
        <Tab.Navigator  screenOptions={{
            headerRight: () => (
                <Entypo
                    name='log-out'
                    size={20}
                    style={{ margin: 10 }}
                    onPress={() => dispatch({ type: 'logOut' })}
                    color="#000"
                />
            )
        }} >
            <Tab.Screen style={styles.tab}
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Entypo name='home' size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Estúdios"
                component={RestaurantRoutes}
                options={{
                    tabBarIcon: () => (
                        <Entypo name='music' size={30} />
                    )
                }}
            />
            <Tab.Screen
                name="Ensaios"
                component={ReviewRoutes}
                options={{
                    tabBarIcon: () => (
                        <Entypo name='calendar' size={30} />
                    )
                }}
            />

            {state.isAdmin ? (
                <Tab.Screen
                    name="Users"
                    component={Users}
                    options={{
                        tabBarIcon: () => (
                            <Entypo name='user' size={30} />
                        )
                    }}
                />
            ) : (
                <></>
            )
            }

        </Tab.Navigator>
    )
}



const styles = StyleSheet.create({
    header : {
        backgroundColor: 'black'
    },

    tab: {
        fontWeight: 'bold'
    }

    
})

export default Routes