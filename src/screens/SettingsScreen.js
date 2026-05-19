import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

import {
    requestPermissions,
    scheduleRepeatingNotification,
} from "../service/notifications";

export default function SettingsScreen() {
    const [text, setText] = useState("Как ты себя чувствуешь?");
    const [interval, setInterval] = useState("60");

    const saveSettings = async () => {
        const granted = await requestPermissions();

        if (!granted) {
            alert("Нет разрешения на уведомления");
            return;
        }

        await scheduleRepeatingNotification(text, Number(interval));

        alert("Уведомления настроены");
    };

    return (
        <View style={styles.container}>
            <Text>Текст уведомления</Text>

            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
            />

            <Text>Интервал в минутах</Text>

            <TextInput
                style={styles.input}
                value={interval}
                onChangeText={setInterval}
                keyboardType="numeric"
            />

            <Button title="Сохранить настройки" onPress={saveSettings} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        marginTop: 5,
    },
});
