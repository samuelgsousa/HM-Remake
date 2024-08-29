import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbNavModule, RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  collapsed = true;

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

toggleMenu() {document.querySelector('span#hamburger')?.classList.toggle('active')}



  
}
