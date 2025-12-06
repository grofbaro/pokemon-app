import React from 'react';
import {Stack} from 'expo-router';
import 'react-native-reanimated';
import {DrawerToggleButton} from "@react-navigation/drawer";
import {Image} from "react-native";

const pokemonImage = require("@/assets/images/pokemon.png");

export default function PokemonLayout() {

    return (
        <Stack
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#CC3B3B',
                },
                headerTitle: () => <Image source={pokemonImage} style={{height: 44, width: 120}} resizeMode="contain"/>
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    headerLeft: () => <DrawerToggleButton/>,
                }}
            />
            <Stack.Screen
                name="[name]"
                options={{
                    headerBackTitle: "Back",
                    headerTintColor: 'white',
                }}
            />
        </Stack>
    );
}
