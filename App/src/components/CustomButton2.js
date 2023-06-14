import { Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const CustomButton2 = ({ onPress, text }) => {

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    )

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#b1fa00',
        width: '30%',
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    
    text: {
        padding: 15,
        fontWeight: 'bold',
        color: 'black',
    }

})

export default CustomButton2;