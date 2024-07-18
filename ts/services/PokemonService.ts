import fetch from 'node-fetch';
import { Pokemon } from '../models/Pokemon';

export class PokemonService {
  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  async getPokemonByName(name: string): Promise<Pokemon> {
    const response = await fetch(`${this.apiUrl}/pokemon/${name}`);
    if (!response.ok) {
      throw new Error(`Error fetching Pokemon: ${response.statusText}`);
    }
    const data = await response.json();
    return this.transformPokemonData(data);
  }

  private transformPokemonData(data: any): Pokemon {
    return {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types.map((typeInfo: any) => typeInfo.type.name),
    };
  }
}