import { Component } from '@angular/core';
import { NgbModule, NgbCarouselModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [NgbModule, NgbCarouselModule, NgbToastModule],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {

  ngOnInit(): void {

    const carouselAdjust = () => {
      const carousels = document.querySelectorAll('ngb-carousel');
      const imgs = document.querySelectorAll('ngb-carousel img');
      const adjVal = Math.floor((((window.innerWidth / 2) - 100)) / 10);
      let cVal;
      let iVal;

      if (window.innerWidth < 1462) {

        if (window.innerWidth < 570) {
          cVal = `${adjVal + 10}vh`;
          iVal = `${adjVal + 20}vh`;
        } else {
          cVal = `${adjVal + 5}vh`;
          iVal = `100%`;
        }

      } else {
        cVal = `70vh`;
        iVal = `100%`;
      }

      //A lógica: tamanho da tela / 2 - 100, para encontrar um valor proporcional e ajustar o tamanho máximo do carrossel
      carousels.forEach(carousel => (carousel as HTMLElement).style.maxHeight = cVal);
      imgs.forEach(img => (img as HTMLElement).style.height = iVal);
    }

    carouselAdjust();

    window.addEventListener("resize", carouselAdjust);
  }

}
