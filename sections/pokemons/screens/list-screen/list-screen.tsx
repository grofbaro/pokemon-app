import React, {useCallback, useState, useMemo} from "react";
import {ActivityIndicator, FlatList, View} from "react-native";
import {usePokemonsQuery} from "@/sections/pokemons/hooks/usePokemonsQuery";
import {PokemonListItem as PokemonListItemType} from "@/sections/pokemons/types/pokemon";
import {PokemonFilterState} from "@/sections/pokemons/types/filter";
import {usePokemonStore} from "@/store/pokemon-store";
import PokemonFilter from "@/sections/pokemons/components/pokemon-filter/pokemon-filter";
import PokemonListHeader from "@/sections/pokemons/components/pokemon-list-header/pokemon-list-header";
import PokemonListItemCard from "@/sections/pokemons/components/pokemon-list-item-card/pokemon-list-item-card";
import PokemonEmptyState from "@/sections/pokemons/components/pokemon-empty-state/pokemon-empty-state";

import styles from "./list-screen.style";

export default function ListScreen() {
    const [filters, setFilters] = useState<PokemonFilterState>({
        searchTerm: "",
        selectedType: null,
        showCaughtOnly: false,
    });

    const {caughtPokemons} = usePokemonStore();

    const {
        data,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = usePokemonsQuery();

    const allPokemons = data?.pages.flatMap(page => page.results) ?? [];

    const pokemons = useMemo(() => {
        let result = allPokemons;

        // Filter by caught status
        if (filters.showCaughtOnly) {
            result = result.filter(p => caughtPokemons.includes(p.name));
        }

        // Filter by search term (client-side)
        if (filters.searchTerm.trim()) {
            const searchLower = filters.searchTerm.toLowerCase().trim();
            result = result.filter(p =>
                p.name.toLowerCase().includes(searchLower)
            );
        }

        return result;
    }, [filters.showCaughtOnly, filters.searchTerm, caughtPokemons]);

    const handleFilterChange = useCallback((newFilters: PokemonFilterState) => {
        setFilters(newFilters);
    }, []);

    const handleEndReached = useCallback(() => {
        // Don't paginate when filtering by type (type API returns all pokemon at once)
        if (filters.selectedType) return;
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [filters.selectedType, hasNextPage, isFetchingNextPage, fetchNextPage]);

    const renderItem = useCallback(({item}: { item: PokemonListItemType }) => (
        <PokemonListItemCard
            item={item}
        />
    ), []);

    const renderFooter = useCallback(() => {
        // No pagination footer when filtering by type
        if (filters.selectedType || !isFetchingNextPage) return null;
        return (
            <View style={styles.footer}>
                <ActivityIndicator size="small"/>
            </View>
        );
    }, [filters.selectedType, isFetchingNextPage]);

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <PokemonFilter onFilterChange={handleFilterChange} />
            <FlatList
                data={pokemons}
                renderItem={renderItem}
                keyExtractor={item => item.name}
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.5}
                ListHeaderComponent={PokemonListHeader}
                ListFooterComponent={renderFooter}
                ListEmptyComponent={PokemonEmptyState}

                contentContainerStyle={styles.flatListContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
