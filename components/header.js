import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: "coral",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    }
});
