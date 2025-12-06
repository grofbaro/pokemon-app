import React from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useColorScheme } from '@/hooks/use-color-scheme';
import {Drawer} from "expo-router/drawer";

const queryClient = new QueryClient()

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Drawer
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#AC3636',
                    width: 261,
                },
                drawerActiveTintColor: "white",
                drawerInactiveTintColor: "yellow",
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#CC3B3B',

                }
            }}
        >
            <Drawer.Screen
                name="index"
                options={{
                    drawerItemStyle: { display: 'none' },
                }}
            />
            <Drawer.Screen
                name="pokemons" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'PokeApi Documentation',
                    title: 'overview',
                }}
            />
        </Drawer>
        <StatusBar style="auto" />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
