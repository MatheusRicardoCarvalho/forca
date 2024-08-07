
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {Roboto_900Black} from '@expo-google-fonts/roboto'
import useLoadFonts from '../hooks/useLoadFonts';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  if(!fontsLoaded) return null;
  
  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
  );
}
