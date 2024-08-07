import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
import {  Roboto_900Black} from '@expo-google-fonts/roboto';

const useLoadFonts = () => {
    const [fontsLoaded] = useFonts({
        'Roboto_900Black': Roboto_900Black,
      });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    return { fontsLoaded, onLayoutRootView };
}

export default useLoadFonts;