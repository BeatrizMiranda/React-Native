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
        height: 80,
        backgroundColor: "coral",
        paddingTop: 38
    },
    title: {}
});
