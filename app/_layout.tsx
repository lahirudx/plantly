import { Stack } from "expo-router";

export default function RootLayout() {
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
