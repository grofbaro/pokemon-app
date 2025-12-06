import React, {useState, useCallback} from "react";
import {View} from "react-native";
import SearchInput from "@/components/ui/search-input/search-input";
import TypeSelect from "@/components/ui/type-select/type-select";
import Checkbox from "@/components/ui/checkbox/checkbox";
import {PokemonFilterState} from "@/sections/pokemons/types/filter";
import {useTypesQuery} from "@/sections/pokemons/hooks/useTypesQuery";
import styles from "./pokemon-filter.style";

interface PokemonFilterProps {
    onFilterChange: (filters: PokemonFilterState) => void;
}

export default function PokemonFilter({onFilterChange}: PokemonFilterProps) {
    const {types} = useTypesQuery();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [showCaughtOnly, setShowCaughtOnly] = useState(false);

    const handleSearchChange = useCallback((text: string) => {
        setSearchTerm(text);
        onFilterChange({
            searchTerm: text,
            selectedType,
            showCaughtOnly,
        });
    }, [selectedType, showCaughtOnly, onFilterChange]);

    const handleTypeChange = useCallback((type: string | null) => {
        setSelectedType(type);
        onFilterChange({
            searchTerm,
            selectedType: type,
            showCaughtOnly,
        });
    }, [searchTerm, showCaughtOnly, onFilterChange]);

    const handleCaughtOnlyChange = useCallback((checked: boolean) => {
        setShowCaughtOnly(checked);
        onFilterChange({
            searchTerm,
            selectedType,
            showCaughtOnly: checked,
        });
    }, [searchTerm, selectedType, onFilterChange]);

    return (
        <View style={styles.container}>
            <SearchInput onChange={handleSearchChange} />
            <TypeSelect
                value={selectedType}
                onChange={handleTypeChange}
                types={types}
            />
            <Checkbox
                label="Only show caught Pokemon"
                checked={showCaughtOnly}
                onChange={handleCaughtOnlyChange}
            />
        </View>
    );
}
