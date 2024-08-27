import { Component, OnInit} from '@angular/core';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar"; 
import {MatSidenavModule} from "@angular/material/sidenav"; 
import {MatList, MatListModule} from "@angular/material/list"; 
import {MatButtonModule} from "@angular/material/button"; 
import {MatIconModule} from "@angular/material/icon";
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbNavModule, RouterLink, RouterModule, CollapseModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {


  active = 1;
  isCollapsed = true;
}
