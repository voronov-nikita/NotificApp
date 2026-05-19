import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StatsScreen from "./screens/StatsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Оценка настроения" }}
                />

                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{ title: "Настройки уведомлений" }}
                />

                <Stack.Screen
                    name="Stats"
                    component={StatsScreen}
                    options={{ title: "Статистика" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
