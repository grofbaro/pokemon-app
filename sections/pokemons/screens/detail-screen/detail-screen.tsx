import React, {useCallback, useMemo} from "react";
import {ActivityIndicator, Image, Pressable, ScrollView, Text, View} from "react-native";
import {useLocalSearchParams, useRouter} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

import {usePokemonQuery} from "@/sections/pokemons/hooks/use-pokemon-query";
import {usePokemonStore} from "@/store/pokemon-store";

import styles from "./detail-screen.style";

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export default function DetailScreen() {
    const {name} = useLocalSearchParams<{ name: string }>();
    const router = useRouter();

    const {data: pokemon, isLoading} = usePokemonQuery({
        url: `${POKEAPI_BASE_URL}/${name}`,
    });

    const {caughtPokemons, catchPokemon, releasePokemon} = usePokemonStore();
    const isCaught = name ? caughtPokemons.includes(name) : false;

    const handleCatchRelease = () => {
        if (!name) return;
        if (isCaught) {
            releasePokemon(name);
        } else {
            catchPokemon(name);
        }
    };

    const formatWeight = useCallback((hectograms: number) => {
        return `${(hectograms / 10).toFixed(0)}kg`;
    }, []);

    const formatHeight = useCallback((decimeters: number) => {
        return `${(decimeters / 10).toFixed(1)}m`;
    }, []);

    const visibleAbilities = useMemo(() => pokemon?.abilities?.filter?.(ability => !ability.is_hidden), [pokemon])

    if (isLoading || !pokemon) {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Pressable style={styles.backButton} onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="#fff"/>
                    </Pressable>
                    <Image
                        source={require("@/assets/images/pokemon.png")}
                        style={styles.logo}
                    />
                </View>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#CC3B3B"/>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <View style={styles.imageContainer}>
                    {pokemon.sprites.front_default ? (
                        <Image
                            source={{uri: pokemon.sprites.front_default}}
                            style={[styles.pokemonImage, {borderColor: isCaught ? "#FFCB05" : "#2E6EB5"}]}
                        />
                    ) : (
                        <View style={[styles.pokemonImage, {borderColor: isCaught ? "#FFCB05" : "#2E6EB5"}]}/>
                    )}
                </View>

                <View style={styles.infoTable}>
                    <View style={[styles.infoRow, styles.infoRowBlue]}>
                        <View style={styles.infoLabel}>
                            <Text style={styles.infoLabelText}>Name</Text>
                        </View>
                        <View style={styles.infoValue}>
                            <Text style={styles.infoValueText}>
                                {pokemon.name}
                            </Text>
                        </View>
                    </View>

                    <View style={[styles.infoRow, styles.infoRowCream]}>
                        <View style={styles.infoLabel}>
                            <Text style={styles.infoLabelText}>Weight</Text>
                        </View>
                        <View style={styles.infoValue}>
                            <Text style={styles.infoValueText}>
                                {formatWeight(pokemon.weight)}
                            </Text>
                        </View>
                    </View>

                    <View style={[styles.infoRow, styles.infoRowBlue]}>
                        <View style={styles.infoLabel}>
                            <Text style={styles.infoLabelText}>Height</Text>
                        </View>
                        <View style={styles.infoValue}>
                            <Text style={styles.infoValueText}>
                                {formatHeight(pokemon.height)}
                            </Text>
                        </View>
                    </View>

                    <View style={[styles.infoRow, styles.infoRowCream]}>
                        <View style={styles.infoLabel}>
                            <Text style={styles.infoLabelText}>Abilities</Text>
                        </View>
                        <View style={styles.infoValue}>
                            {visibleAbilities?.map(ability =>
                                <Text key={ability.ability.name}
                                      style={styles.infoValueText}>
                                    {ability.ability.name}
                                </Text>)}

                        </View>
                    </View>

                    <View style={[styles.infoRow, styles.infoRowBlue, styles.infoRowLast]}>
                        <View style={styles.infoLabel}>
                            <Text style={styles.infoLabelText}>Status</Text>
                        </View>
                        <View style={styles.infoValue}>
                            <Text style={styles.infoValueText}>
                                {isCaught ? "Caught" : "-"}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <Pressable
                    style={[styles.actionButton, {backgroundColor: isCaught ? "#FFCB05" : "#2E6EB5"}]}
                    onPress={handleCatchRelease}
                >
                    <Text style={styles.actionButtonText}>
                        {isCaught ? "Release" : "Catch"}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
