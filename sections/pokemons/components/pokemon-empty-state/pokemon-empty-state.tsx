import React from "react";
import {View, Text} from "react-native";

import styles from "./pokemon-empty-state.style";

interface PokemonEmptyStateProps {
    title?: string;
    subtitle?: string;
}

export default function PokemonEmptyState({
    title = "No Pokémon found",
    subtitle = "Try adjusting your filters or search term",
}: PokemonEmptyStateProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
}
