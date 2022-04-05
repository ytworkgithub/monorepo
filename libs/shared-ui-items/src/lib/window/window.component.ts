import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'monorepo-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent implements OnInit {
  @Input() title = '';

  constructor() {}

  ngOnInit(): void {}
}
