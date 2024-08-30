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
  
    const pref = window.matchMedia('(prefers-color-scheme: dark)').matches
              
    if(pref == true){ 
        document.querySelector('html')?.classList.add('dark-mode')
        document.querySelector('#logo_hm')?.setAttribute('src', 'logo/hmCleanLogoDarkmode.svg')
  
    } else{
      document.querySelector('html')?.classList.remove('dark-mode')
      document.querySelector('#logo_hm')?.setAttribute('src', 'logo/hmCleanLogo.svg')
    }
  }

}
