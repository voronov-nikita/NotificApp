import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

import { saveMood } from "../storage/moodStorage";

export default function HomeScreen({ navigation }) {
    const [selected, setSelected] = useState(null);

    const submitMood = async () => {
        if (selected === null) return;

        await saveMood(selected);

        alert("Оценка сохранена");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Оцените настроение от 0 до 10</Text>

            <View style={styles.grid}>
                {[...Array(11).keys()].map((n) => (
                    <TouchableOpacity
                        key={n}
                        style={[
                            styles.button,
                            selected === n && styles.selected,
                        ]}
                        onPress={() => setSelected(n)}
                    >
                        <Text style={styles.buttonText}>{n}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Button title="Сохранить" onPress={submitMood} />

            <View style={{ height: 20 }} />

            <Button
                title="Настройки уведомлений"
                onPress={() => navigation.navigate("Settings")}
            />

            <View style={{ height: 10 }} />

            <Button
                title="Статистика"
                onPress={() => navigation.navigate("Stats")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },

    title: {
        fontSize: 22,
        marginBottom: 20,
        textAlign: "center",
    },

    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 20,
    },

    button: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },

    selected: {
        backgroundColor: "#4CAF50",
    },

    buttonText: {
        fontSize: 20,
        color: "#fff",
    },
});
