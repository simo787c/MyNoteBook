import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

//props to access login functions
const loginScreen = (props) => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
    <View style={styles.screen}>
        <Text>Login</Text>
        <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType='email-address'
        />
        <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
        />
        {props.error && <Text>{props.error}</Text>}
        <View>
            <Button title='signin' onPress={() => props.signin(email,password)}></Button>
            <Button title='create' onPress={() => props.createUser(email, password)}></Button>
        </View>
    </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
});

export default loginScreen