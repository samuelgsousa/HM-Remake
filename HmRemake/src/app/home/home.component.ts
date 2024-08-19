import { Component } from '@angular/core';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule],
  template:`
 <ngb-carousel>
      <ng-template ngbSlide>
        <img src="https://img.freepik.com/fotos-gratis/homens-trabalhando-no-corte-de-placa-de-mdf_23-2149384798.jpg?w=1380&t=st=1707078632~exp=1707079232~hmac=34b832e3da548319463fb4ced5ae46e0b96903c5b1506cd99e77f30f91a9b2f7" class="d-block w-100" alt="...">
      </ng-template>
      <ng-template ngbSlide>
        <img src="https://img.freepik.com/fotos-gratis/pessoas-de-tiro-medio-usando-capacetes-no-trabalho_23-2149366667.jpg?w=1380&t=st=1707078936~exp=1707079536~hmac=9d4dbb902bfa34273b8678ed355ef9db0595e8e0f51fc43ebeeca5b4bec3a99e" class="d-block w-100" alt="...">
      </ng-template>
      <ng-template ngbSlide>
        <img src="https://img.freepik.com/fotos-gratis/trabalhador-afro-americano-varrendo-detritos-soltos-acumulados-ao-redor-da-base-do-ar-condicionado-engenheiro-treinado-para-limpeza-do-corpo-do-sistema-hvac-e-painel-de-controle-com-ferramenta-de-escova-para-remover-sujeira-solta_482257-70162.jpg?w=1380&t=st=1707079671~exp=1707080271~hmac=0f9c6daa7d39f65eded9ac10672b890ce85b50ec5e4091a5da68c4263fcd60ab" class="d-block w-100" alt="...">
      </ng-template>
      <img src="https://img.freepik.com/fotos-gratis/equipe-um-tecnico-eletrico-trabalhando-em-um-quadro-de-distribuicao-com-fusiveis_169016-24586.jpg?w=740&t=st=1707152726~exp=1707153326~hmac=6c1bac699d847a6f76ee9bb6d73c87028562dd7f62fd1f83aa12205d6c7942e7" class="d-block w-50" alt="...">
      <ng-template ngbSlide>
      </ng-template>
    </ngb-carousel>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
