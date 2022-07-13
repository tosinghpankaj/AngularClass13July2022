import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // change this name to The Best App Ever
  title = 'Pokemon App and Other Stuff';
  author: string = 'byronius brownington IV';
}
