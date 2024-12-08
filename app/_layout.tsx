import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import * as QuickActions from "expo-quick-actions";
import { useQuickActionRouting } from "expo-quick-actions/router";
import { Platform } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useQuickActionRouting();

  useEffect(() => {
    QuickActions.setItems([
      {
        title: "Add a plant",
        icon: Platform.OS === "ios" ? "symbol:leaf" : "leaf",
        id: "0",
        params: { href: "/new" },
      },
    ]);
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ animation: "fade" }} />
      <Stack.Screen
        name="onboarding"
        options={{
          presentation: "modal",
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="new"
        options={{
          presentation: "modal",
          title: "New plant",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
