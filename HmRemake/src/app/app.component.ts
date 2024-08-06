import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
  <app-header></app-header>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HmRemake';
}
