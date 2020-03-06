import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation';
  body = 'This is a body';


  constructor() {
  }

  handleInput(event) {
    console.log(event.target.value);
  }

}
