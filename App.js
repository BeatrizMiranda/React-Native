import React, { useState } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    Alert,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
    const [todos, setTodos] = useState([
        { text: "Finish react native class", key: "1" },
        { text: "Flutter", key: "2" }
    ]);
    const handdlePress = key => {
        setTodos(prevTodos => prevTodos.filter(todos => todos.key != key));
    };
    const submitHanddler = text => {
        if (text.length > 3) {
            setTodos(prevTodos => {
                return [{ text, key: Math.random().toString() }, ...prevTodos];
            });
        } else {
            // Test alert in home e o keyboard tbm
            Alert.alert("Ops!", "Todo's must be over 3 chars long", [
                {
                    text: "Understood",
                    onPress: () => console.log("alert closed")
                }
            ]);
        }
    };
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo submitHanddler={submitHanddler} />
                    {/* To Do Form */}
                    <View style={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                <TodoItem
                                    handdlePress={handdlePress}
                                    item={item}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        position: "relative"
    },
    content: {
        flex: 1,
        padding: 40
    },
    list: {
        flex: 1,
        marginTop: 20
    }
});
