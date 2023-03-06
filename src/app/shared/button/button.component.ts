import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() click = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.click.emit();
  }
}
