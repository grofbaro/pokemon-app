import {useInfiniteQuery} from "@tanstack/react-query";
import {PokemonListResponse} from "@/sections/pokemons/types/pokemon";
import axios from "axios";

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const usePokemonsQuery = () => {
    const {
        data,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        isLoading,
        refetch,
    } = useInfiniteQuery({
        initialPageParam: POKEAPI_BASE_URL,
        queryKey: ["pokemons"],
        queryFn: async ({pageParam}): Promise<PokemonListResponse> => {
            const response = await axios.get(pageParam);
            return response.data;
        },
        getNextPageParam: (lastPage) => lastPage.next ?? undefined,
        getPreviousPageParam: (firstPage) => firstPage.previous ?? undefined,
    });

    return {
        data,
        isFetching,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        isLoading,
        refetch,
    }
}

export {
    usePokemonsQuery
}
