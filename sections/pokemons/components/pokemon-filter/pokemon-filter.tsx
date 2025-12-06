import React, {useCallback} from "react";
import {View} from "react-native";
import SearchInput from "@/components/ui/search-input/search-input";
import TypeSelect from "@/components/ui/type-select/type-select";
import Checkbox from "@/components/ui/checkbox/checkbox";
import {PokemonFilterState} from "@/sections/pokemons/types/filter";
import {useTypesQuery} from "@/sections/pokemons/hooks/use-types-query";
import styles from "./pokemon-filter.style";

interface PokemonFilterProps {
    filters: PokemonFilterState;
    onFilterChange: (filters: PokemonFilterState) => void;
}

export default function PokemonFilter({filters, onFilterChange}: PokemonFilterProps) {
    const {types} = useTypesQuery();

    const handleSearchChange = useCallback((text: string) => {
        onFilterChange({...filters, searchTerm: text});
    }, [filters, onFilterChange]);

    const handleTypeChange = useCallback((type: string | null) => {
        onFilterChange({...filters, selectedType: type});
    }, [filters, onFilterChange]);

    const handleCaughtOnlyChange = useCallback((checked: boolean) => {
        onFilterChange({...filters, showCaughtOnly: checked});
    }, [filters, onFilterChange]);

    return (
        <View style={styles.container}>
            <SearchInput onChange={handleSearchChange} />
            <TypeSelect
                value={filters.selectedType}
                onChange={handleTypeChange}
                types={types}
            />
            <Checkbox
                label="Only show caught Pokemon"
                checked={filters.showCaughtOnly}
                onChange={handleCaughtOnlyChange}
            />
        </View>
    );
}
