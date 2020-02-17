import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
    const [people, setPeople] = useState([
        { name: "Mario", key: 1 },
        { name: "Luigi", key: 2 },
        { name: "Peach", key: 3 },
        { name: "Bowser", key: 4 },
        { name: "Goomba", key: 5 },
        { name: "Toad", key: 6 }
    ]);

    return (
        <View style={styles.container}>
            <ScrollView>
                {people.map(it => (
                    <View key={it.key}>
                        <Text style={styles.item}>{it.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        backgroundColor: "pink",
        padding: 20
    },
    boldText: {
        fontWeight: "bold"
    },
    buttonContainer: {
        marginTop: 20
    },
    input: {
        borderWidth: 1,
        borderColor: "#777",
        padding: 8,
        margin: 10,
        width: 200
    },
    listContainer: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 40,
        paddingHorizontal: 20
    },
    item: {
        margin: 20,
        padding: 30,
        backgroundColor: "pink",
        fontSize: 24
    }
});
