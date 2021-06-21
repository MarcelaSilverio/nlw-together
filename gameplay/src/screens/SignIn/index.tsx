import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';

export function SignIn() {

    const [text, setText] = useState(''); //estados para armazenar valores


    return (
        <View style={styles.container}>

            <Text>Hello World, NLW Together</Text>

            <TextInput
                style={styles.input}
                onChangeText={setText} //(value) => console.log(value)
            />

            <Text>
                Você digitou: {text}
            </Text>

        </View>
    );
}