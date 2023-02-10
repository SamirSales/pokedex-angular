import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-type-labels',
  templateUrl: './pokemon-type-labels.component.html',
  styleUrls: ['./pokemon-type-labels.component.css']
})
export class PokemonTypeLabelsComponent implements OnInit {
  @Input() types: { name: string }[] = [];
  @Input() outlined: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getBackgroundColorByType(type: { name: string }) {
    if (!this.outlined) {
      return this.getColorByType(type);
    }
    return 'transparent';
  }

  getTextColorByType(type: { name: string }) {
    if (this.outlined) {
      return this.getColorByType(type);
    }
    return 'white';
  }

  getColorByType(type: { name: string }) {
    switch (type.name) {
      case 'normal':
        return '#B0BEC5';
      case 'fighting':
        return '#F48FB1';
      case 'flying':
        return '#82B1FF';
      case 'poison':
        return '#CE93D8';
      case 'ground':
        return '#F57F17';
      case 'rock':
        return '#D7CCC8';
      case 'bug':
        return '#C5E1A5';
      case 'ghost':
        return '#0277BD';
      case 'steel':
        return '#80CBC4';
      case 'water':
        return '#40C4FF';
      case 'fire':
        return '#FFB300';
      case 'grass':
        return '#388E3C';
      case 'electric':
        return '#FFEE58';
      case 'psychic':
        return '#EF9A9A';
      case 'ice':
        return '#B2EBF2';
      case 'dragon':
        return '#039BE5';
      case 'dark':
        return '#757575';
      case 'fairy':
        return '#F8BBD0';
      default:
        return '#FF9800';
    }
  }
}
