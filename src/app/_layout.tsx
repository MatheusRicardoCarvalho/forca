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
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="menu" options={{ headerShown: false }} />
        <Stack.Screen name="scoreBoard" options={{ headerShown: false }} />
        <Stack.Screen name="game" options={{ headerShown: false }} />
        <Stack.Screen name="loseScreen" options={{ headerShown: false }} />
        <Stack.Screen name="winScreen" options={{ headerShown: false }} />
      </Stack>
    </ContextProvider>
  );
}
