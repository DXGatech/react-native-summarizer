import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

import {firebase} from '../../firebase/config';

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    

    const onFooterLinkPress = () => {
        navigation.navigate('Registration')
    }

    const onRegisterPress = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
            // TODO: store the following user info in a global storage such as Redux
            const uid = response.user.uid;
            const userData = {
                id: uid, 
                email: email, 
                username: name,
            };
            userdb = firebase.firestore().collection('users'); 
            userdb.doc(uid).set(userData).then(() => {
                navigation.navigate('HomePage', {user: userData});
            }).catch(error => {
                alert(error);
            });
        }).catch(error => {
            alert(error);
        });
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/icon.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Username'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Register</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}