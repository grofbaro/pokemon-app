export interface NamedAPIResource {
    name: string;
    url: string;
}
export type PokemonListItem = NamedAPIResource

export interface PokemonListResponse {
    count: number
    next: string | null,
    previous: string | null,
    results: NamedAPIResource[];
}


export interface PokemonTypeEntry {
    slot: number;
    type: NamedAPIResource;
}

export interface AbilityEntry {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
}

export interface PokemonSprites {
    front_default: string | null;
}

export interface PokemonDetail {
    id: number;
    name: string;
    types: PokemonTypeEntry[];
    weight: number;
    height: number;
    abilities: AbilityEntry[];
    sprites: PokemonSprites;
}

export interface TypesListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedAPIResource[];
}

export interface TypePokemonEntry {
    pokemon: NamedAPIResource;
    slot: number;
}

export interface TypeDetailResponse {
    id: number;
    name: string;
    pokemon: TypePokemonEntry[];
}
