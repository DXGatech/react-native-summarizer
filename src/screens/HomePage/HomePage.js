import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {firebase} from '../../firebase/config';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';

const storageRef = firebase.storage().ref();
const AylientextAPI = require('aylien_textapi'); //Need to perform npm install aylien_textapi//
const textapi = new AylientextAPI({
    application_id: '12049eaa'
    application_key: '0050eee15d54ac3dbd69d868fc1e8570'
})

export default function HomeScreen(props) {

    constructor() {
        super();
        this.state = {
            file: null,
            fileuri: ''
        }
    }

    pickDocument = async () => {
        const result = await DocumentPicker.getDocumentAsync({});
        console.log('result', result);
        if (!result.cancelled) {
            this.setState({
                file: result,
                fileuri: result.uri
            });
        }
    }

    summarizeNow = async () => {
        textapi.summarize({
            url: this.state.fileuri,
            sentences_number: 5
        }, function(error, response) {
            if (error === null) {
                response.sentences.forEach(function(s) {
                    console.log(s);
                });
            }
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => this.pickDocument()} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Choose File</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.summarizeNow()} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Summarize</Text>
            </TouchableOpacity>
        </View>
    )
}