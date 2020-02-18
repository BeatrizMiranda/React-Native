import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, handdlePress }) {
    return (
        <View style={styles.item}>
            <TouchableOpacity>
                <MaterialIcons
                    name="delete"
                    size={20}
                    color="#333"
                    onPress={() => handdlePress(item.key)}
                />
            </TouchableOpacity>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        flexDirection: "row"
    },
    text: {
        marginLeft: 10
    }
});
