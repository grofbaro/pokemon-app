import {useQuery} from "@tanstack/react-query";
import {PokemonDetail} from "@/sections/pokemons/types/pokemon";
import axios from "axios";

interface UsePokemonQueryOptions {
    url: string;
    enabled?: boolean;
}

const usePokemonQuery = ({url, enabled = true}: UsePokemonQueryOptions) => {
    const {
        data,
        isLoading,
        isError,
        error,
        isFetching,
    } = useQuery({
        queryKey: ["pokemon", url],
        queryFn: async (): Promise<PokemonDetail> => {
            const response = await axios.get(url);
            return response.data;
        },
        enabled,
        staleTime: 1000 * 60 * 5,
    });

    return {
        data,
        isLoading,
        isError,
        error,
        isFetching,
    };
};

export {usePokemonQuery};
