import PokemonTypeColorHandler from '../PokemonTypeColorHandler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textColorByPokemonType'
})
export class TextColorByPokemonTypePipe implements PipeTransform {
  outlined: boolean = false;

  transform(type: string, outlined: boolean = false): unknown {
    this.outlined = outlined;
    return this.getTextColorByType(type);
  }

  getTextColorByType(type: string) {
    if (this.outlined) {
      return PokemonTypeColorHandler.getColorByType(type);
    }
    return 'white';
  }
}
