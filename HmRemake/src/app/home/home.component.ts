import { Component } from '@angular/core';
import {NgbConfig, NgbToastModule, NgbCarousel, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NgbModule, NgbCarouselModule, NgbToastModule], 
  templateUrl:'./home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}

//tenta criar um server depois
