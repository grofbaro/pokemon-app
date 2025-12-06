import {useQuery} from "@tanstack/react-query";
import {TypeDetailResponse, PokemonListItem} from "@/sections/pokemons/types/pokemon";
import axios from "axios";

const POKEAPI_TYPE_URL = "https://pokeapi.co/api/v2/type";

const usePokemonsByTypeQuery = (typeName: string | null) => {
    const {
        data,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["pokemons-by-type", typeName],
        queryFn: async (): Promise<TypeDetailResponse> => {
            const response = await axios.get(`${POKEAPI_TYPE_URL}/${typeName}`);
            return response.data;
        },
        enabled: !!typeName,
    });

    const pokemons: PokemonListItem[] = data?.pokemon.map(entry => ({
        name: entry.pokemon.name,
        url: entry.pokemon.url,
    })) ?? [];

    return {
        pokemons,
        isLoading,
        error,
    }
}

export {
    usePokemonsByTypeQuery
}
