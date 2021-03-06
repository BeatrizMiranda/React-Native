import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHanddler }) {
    const [text, setText] = useState("");
    const changeHanddler = val => {
        setText(val);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="New Todo..."
                onChangeText={changeHanddler}
                value={text}
            />
            <Button
                onPress={() => {
                    submitHanddler(text);
                    setText("");
                }}
                title="Add Todo"
                color="coral"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
});
