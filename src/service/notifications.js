import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export async function requestPermissions() {
    const { status } = await Notifications.requestPermissionsAsync();
    return status === "granted";
}

export async function scheduleRepeatingNotification(text, intervalMinutes) {
    await Notifications.cancelAllScheduledNotificationsAsync();

    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Напоминание",
            body: text,
        },
        trigger: {
            seconds: intervalMinutes * 60,
            repeats: true,
        },
    });
}
