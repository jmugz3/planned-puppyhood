import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pupper 2 Doggo';
  links: object[];

  constructor(){
    this.links = [
      {
      'label': 'contact',
      'route': '/contact'
      },
      {
      'label': 'resources',
      'route': '/resources'
      },
      {
      'label': 'blogs',
      'route': '/blogs'
      },
      {
      'label': 'about',
      'route': '/about'
      },
      {
      'label': 'home',
      'route': '/home'
      }
    ]
  }








}
