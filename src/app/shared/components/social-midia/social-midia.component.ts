import { Component } from '@angular/core';

@Component({
  selector: 'app-social-midia',
  templateUrl: './social-midia.component.html',
  styleUrl: './social-midia.component.scss'
})
export class SocialMidiaComponent {

  public openURL(path: string) {
    window.location.href = path;
  }
}
