export default class PokemonDetailsModel {
    constructor(public dataResponse: any) {}

    getDescriptionByLocale(locale: string) {
        return this.dataResponse.flavor_text_entries
            .filter((fte: any) => {
                return fte.language.name === locale;
            })[0]
            .flavor_text.replace('\f', ' ');
    }

    getEvolutionChainURL() {
        return this.dataResponse.evolution_chain.url;
    }
}
