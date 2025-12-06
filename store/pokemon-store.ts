import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface PokemonStore {
    caughtPokemons: string[];
    catchPokemon: (name: string) => void;
    releasePokemon: (name: string) => void;
    isCaught: (name: string) => boolean;
}

export const usePokemonStore = create<PokemonStore>()(
    persist(
        (set, get) => ({
            caughtPokemons: [],
            catchPokemon: (name: string) => {
                set((state) => ({
                    caughtPokemons: [...state.caughtPokemons, name],
                }));
            },
            releasePokemon: (name: string) => {
                set((state) => ({
                    caughtPokemons: state.caughtPokemons.filter((p) => p !== name),
                }));
            },
            isCaught: (name: string) => {
                return get().caughtPokemons.includes(name);
            },
        }),
        {
            name: 'pokemon-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
