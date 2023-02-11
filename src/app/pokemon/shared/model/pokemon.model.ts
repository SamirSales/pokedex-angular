export const PokemonModelMapper = {
  getByDataResponse(dataResponse: any): PokemonInterface {
    return {
      id: dataResponse.id,
      imageURL: dataResponse.sprites.front_default,
      name: dataResponse.name.charAt(0).toUpperCase() + dataResponse.name.slice(1),
      types: dataResponse.types.map((type: any) => {
        return { name: type.type.name };
      }),

      heightInMeters: dataResponse.height / 10,
      weightInKg: dataResponse.weight / 10,
      baseExperience: dataResponse.base_experience,

      gameNames: dataResponse.game_indices.map((gi: any) => gi.version.name),
      points: dataResponse.stats.map((st: any) => {
        return { name: st.stat.name, value: st.base_stat };
      })
    };
  },

  getEmpty(): PokemonInterface {
    return {
      id: '',
      imageURL: '',
      name: '',
      types: [],
      heightInMeters: 0,
      weightInKg: 0,
      baseExperience: null,
      gameNames: [],
      points: []
    };
  }
};

export interface PokemonInterface {
  readonly id: string;
  readonly imageURL: string;
  readonly name: string;
  readonly types: { name: string }[];
  readonly heightInMeters: number;
  readonly weightInKg: number;
  readonly baseExperience: any;
  readonly gameNames: string[];
  readonly points: { name: string; value: number }[];
}
