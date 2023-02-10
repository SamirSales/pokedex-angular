import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-evolution-link',
  templateUrl: './pokemon-evolution-link.component.html',
  styleUrls: ['./pokemon-evolution-link.component.css']
})
export class PokemonEvolutionLinkComponent implements OnInit {
  @Input() pokemonLinks: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
