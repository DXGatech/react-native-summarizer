import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    title: {
    		color: '#FFF',
    		marginTop: 10,
    		textAlign: 'center'
    },
    buttonsContainer: {
    		padding: 25,
    		width: 375
    },
    buttonText: {
    		textAlign: 'center',
    		color: '#FFF',
    		fontWeight: '800'
    },
    buttonContainer: {
    		backgroundColor: '#16a085',
    		paddingVertical: 10,
    		marginBottom: 10,
    		marginTop: 10
    }
})