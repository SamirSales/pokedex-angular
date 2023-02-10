export default class PokemonEvolutionChainModel {
  constructor(public dataResponse: any) {}

  getTreeData() {
    return [getTreeDataRecursively(this.dataResponse.chain)];
  }

  hasEvolution() {
    return this.dataResponse.chain.evolves_to.length > 0;
  }
}

const getTreeDataRecursively = (data: any) => {
  const name = data.species.name;
  const id = parseInt(data.species.url.replace('https://pokeapi.co/api/v2/pokemon-species/', '').replace('/', ''));

  return {
    id,
    name: name.charAt(0).toUpperCase() + name.slice(1),
    children: data.evolves_to.map((e: any) => getTreeDataRecursively(e))
  };
};
