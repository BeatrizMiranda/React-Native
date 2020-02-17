import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import header from ".";

export default function App() {
    const [todos, setTodos] = useState([
        { text: "Finish react native class", key: "1" },
        { text: "Flutter", key: "2" }
    ]);
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.content}>
                {/* To Do Form */}
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => <Text>{item.text}</Text>}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    content: {
        padding: 40
    },
    list: {
        marginTop: 20
    }
});
