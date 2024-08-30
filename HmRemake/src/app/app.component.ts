import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { HomeComponent} from './home/home.component';
import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterModule, FooterComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {  

  title = 'HmRemake';
  
  ngOnInit(): void{
    console.log("teste")
    // const pref = window.matchMedia('(prefers-color-scheme: dark)').matches
    // console.log(pref)
    // if(pref == true){ 
    //   console.log("Deveria mostrar 1")
    //     document.querySelector('html')?.classList.add('dark-mode')
    //     document.querySelector('#logo_hm')?.setAttribute('src', 'logo/hmCleanLogoDarkmode.svg')
    //     console.log("Deveria mostrar 2")
  
    // } else{
    //   document.querySelector('html')?.classList.remove('dark-mode')
    //   document.querySelector('#logo_hm')?.setAttribute('src', 'logo/hmCleanLogo.svg')
    // }
  }

}
