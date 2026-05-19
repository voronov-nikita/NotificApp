import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "MOOD_HISTORY";

export async function saveMood(value) {
    const existing = await AsyncStorage.getItem(KEY);

    const parsed = existing ? JSON.parse(existing) : [];

    parsed.push({
        value,
        date: new Date().toISOString(),
    });

    await AsyncStorage.setItem(KEY, JSON.stringify(parsed));
}

export async function getMoodHistory() {
    const existing = await AsyncStorage.getItem(KEY);

    return existing ? JSON.parse(existing) : [];
}
