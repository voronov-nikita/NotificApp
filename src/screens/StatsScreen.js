import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";

import { LineChart } from "react-native-chart-kit";

import { getMoodHistory } from "../storage/moodStorage";

export default function StatsScreen() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const data = await getMoodHistory();
        setHistory(data);
    };

    const labels = history.map((_, index) => `${index + 1}`);

    const values = history.map((item) => item.value);

    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                <Text
                    style={{
                        fontSize: 22,
                        marginBottom: 20,
                        textAlign: "center",
                    }}
                >
                    График настроения
                </Text>

                {values.length > 0 ? (
                    <LineChart
                        data={{
                            labels,
                            datasets: [
                                {
                                    data: values,
                                },
                            ],
                        }}
                        width={Dimensions.get("window").width - 20}
                        height={220}
                        yAxisInterval={1}
                        fromZero
                        chartConfig={{
                            backgroundGradientFrom: "#fff",
                            backgroundGradientTo: "#fff",
                            decimalPlaces: 0,

                            color: (opacity = 1) =>
                                `rgba(0, 0, 255, ${opacity})`,

                            labelColor: (opacity = 1) =>
                                `rgba(0, 0, 0, ${opacity})`,
                        }}
                        bezier
                    />
                ) : (
                    <Text>Нет данных</Text>
                )}
            </View>
        </ScrollView>
    );
}
