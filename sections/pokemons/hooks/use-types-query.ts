import {useQuery} from "@tanstack/react-query";
import {TypesListResponse} from "@/sections/pokemons/types/pokemon";
import axios from "axios";

const POKEAPI_TYPES_URL = "https://pokeapi.co/api/v2/type";

const useTypesQuery = () => {
    const {
        data,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["pokemon-types"],
        queryFn: async (): Promise<TypesListResponse> => {
            const response = await axios.get(POKEAPI_TYPES_URL);
            return response.data;
        },
        staleTime: 1000 * 60 * 60, // 1 hour - types don't change often
    });

    const types = data?.results.map(t => t.name) ?? [];

    return {
        types,
        isLoading,
        error,
    }
}

export {
    useTypesQuery
}
