import { Component, OnInit } from '@angular/core';
import { log } from '@monorepo/shared-logger';

@Component({
  selector: 'monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'asd';

  ngOnInit() {
    log(this.title);
  }
}
