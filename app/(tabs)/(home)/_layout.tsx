import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "@/theme";

export default function RootLayout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          animation: "fade",
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable hitSlop={20} style={{}}>
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={theme.colorGreen}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="plants/[plantId]"
        options={{
          title: "",
          headerTintColor: theme.colorBlack,
        }}
      />
    </Stack>
  );
}
