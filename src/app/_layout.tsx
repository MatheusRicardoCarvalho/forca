import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";
import useLoadFonts from "../hooks/useLoadFonts";
import ContextProvider from "../context/AuthProvider";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ContextProvider>
<Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Register" options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Menu" options={{ headerShown: false }} />
        <Stack.Screen name="ScoreBoard" options={{ headerShown: false }} />
        <Stack.Screen name="Game" options={{ headerShown: false }} />
        <Stack.Screen name="LoseScreen" options={{ headerShown: false }} />
        <Stack.Screen name="WinScreen" options={{ headerShown: false }} />
      </Stack>
    </ContextProvider>
      
  );
}
