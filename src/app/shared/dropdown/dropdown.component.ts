import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  animations: [
    trigger('dropdownState', [
      state(
        'visible',
        style({
          transform: 'translateY(0)',
          display: 'block',
          opacity: 1
        })
      ),

      state(
        'hide',
        style({
          transform: 'translateY(-0.625rem)',
          display: 'none',
          opacity: 0
        })
      ),

      transition('visible <=> hide', animate(100))
    ])
  ]
})
export class DropdownComponent implements OnInit {
  @Input() value: string = '';
  @Input() options: string[] = [];
  @Output() select = new EventEmitter<string>();

  dropdownState: string = 'hide';

  constructor() {}

  ngOnInit(): void {}

  getText() {
    if (this.value.trim().length == 0) {
      return 'Select a value';
    }
    return this.value;
  }

  onSelectOption(option: string) {
    this.select.emit(option);
    this.dropdownState = 'hide';
  }

  onClick() {
    this.dropdownState = 'visible';
  }

  onMouveEnter() {
    this.dropdownState = 'visible';
  }

  onMouveLeave() {
    this.dropdownState = 'hide';
  }
}
