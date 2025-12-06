import React from "react";
import {Pressable, Text, View} from "react-native";
import {useRouter} from "expo-router";

import {PokemonListItem} from "@/sections/pokemons/types/pokemon";
import {usePokemonQuery} from "@/sections/pokemons/hooks/usePokemonQuery";
import {usePokemonStore} from "@/store/pokemon-store";

import styles from "./pokemon-list-item-card.style";

interface PokemonListItemProps {
    item: PokemonListItem,
}

export default function PokemonListItemCard({item}: PokemonListItemProps) {
    const router = useRouter();
    const {data: pokemon, isLoading} = usePokemonQuery({url: item.url});
    const {caughtPokemons, catchPokemon, releasePokemon} = usePokemonStore();
    const isCaught = caughtPokemons.includes(item.name);

    const handleCatchRelease = () => {
        if (isCaught) {
            releasePokemon(item.name);
        } else {
            catchPokemon(item.name);
        }
    };

    const typesDisplay = isLoading
        ? "..."
        : pokemon?.types.map(t => t.type.name).join(", ") ?? "-";

    const handlePress = () => {
        router.push(`/pokemons/${item.name}`);
    };

    return (
        <Pressable style={styles.row} onPress={handlePress}>
            <View style={[styles.itemCard]}>
                <Text style={styles.name}>{item.name || 'card'}</Text>
                <Text style={styles.type}>{typesDisplay}</Text>
                <Text style={styles.status}>{isCaught ? "Caught" : "-"}</Text>
            </View>
            <Pressable
                style={[styles.actionButton, isCaught ? styles.releaseButton : styles.catchButton]}
                onPress={handleCatchRelease}
            >
                <Text style={styles.actionButtonText}>{isCaught ? "Release" : "Catch"}</Text>
            </Pressable>
        </Pressable>
    );
}
