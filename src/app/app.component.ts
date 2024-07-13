import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet> 
  <app-navbar-component/>
  </router-outlet> 
  <app-footer-component/>`,
})
export class AppComponent {
  title = 'Dra. Mariana Bianchi';
}
