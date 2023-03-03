import PokemonTypeColorHandler from '../../PokemonTypeColorHandler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backgroundColorByPokemonType'
})
export class BackgroundColorByPokemonTypePipe implements PipeTransform {
  outlined: boolean = false;

  transform(type: string, outlined: boolean = false): unknown {
    this.outlined = outlined;
    return this.getBackgroundColorByType(type);
  }

  getBackgroundColorByType(type: string) {
    if (!this.outlined) {
      return PokemonTypeColorHandler.getColorByType(type);
    }
    return 'transparent';
  }
}
