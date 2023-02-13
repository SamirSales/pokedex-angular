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
}
