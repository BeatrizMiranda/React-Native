import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from "react-native";

export default function App() {
    const [people, setPeople] = useState([
        { name: "Mario", id: 1 },
        { name: "Luigi", id: 2 },
        { name: "Peach", id: 3 },
        { name: "Bowser", id: 4 },
        { name: "Goomba", id: 5 },
        { name: "Toad", id: 6 }
    ]);
    const pressHandler = id => {
        console.log(id);
        setPeople(prevPeople => {
            return prevPeople.filter(person => person.id != id);
        });
    };
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                keyExtractor={item => item.id}
                data={people}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item.id)}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20
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
        marginTop: 20,
        padding: 30,
        backgroundColor: "pink",
        fontSize: 24,
        marginHorizontal: 10
    }
});
