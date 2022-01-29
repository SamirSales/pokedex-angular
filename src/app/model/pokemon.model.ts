export default class PokemonModel {
    id = null;
    imageURL = null;
    name = null;
    types = null;
    heightInMeters = 0;
    weightInKg = 0;
    baseExperience = null;
    gameNames = null;
    points = null;

    constructor(dataResponse: any) {
        this.id = dataResponse.id;
        this.imageURL = dataResponse.sprites.front_default;
        this.name = dataResponse.name.charAt(0).toUpperCase() + dataResponse.name.slice(1);
        this.types = dataResponse.types.map((type: any) => {
            return { name: type.type.name };
        });

        this.heightInMeters = dataResponse.height / 10;
        this.weightInKg = dataResponse.weight / 10;
        this.baseExperience = dataResponse.base_experience;

        this.gameNames = dataResponse.game_indices.map((gi: any) => gi.version.name);
        this.points = dataResponse.stats.map((st: any) => {
            return { name: st.stat.name, value: st.base_stat };
        });
    }
}
