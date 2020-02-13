import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
    const [name, setName] = useState('Bea');
    const [age, setAge] = useState('19')
    
    const [people, setPeople] = useState([
        {name: "Mario", key: 1},
        {name: "Luigi", key: 2},
        {name: "Peach", key: 3},
        {name: "Bowser", key: 4},
        {name: "Goomba", key: 5},
        {name: "Toad", key: 6},
    ])

    return (
        <View style={styles.container}>
            <View>
                <Text>Enter Name: </Text>
                <TextInput 
                    multiline
                    style={styles.input}
                    placeholder="Bea Miranda"
                    onChangeText={(val) => setName(val)}
                    />
                <Text>Enter Age: </Text>
                <TextInput 
                    keyboardType='numeric'
                    style={styles.input} 
                    placeholder="19"
                    onChangeText={(val) => setAge(val)}
                    />

                <Text>Hello {name}, and you are {age} years old !!!</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Update state"/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: 'pink',
        padding: 20,
    },
    boldText: {
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    },
    listContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 20
    }
});

