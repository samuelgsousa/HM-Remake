import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { NgModule } from '@angular/core';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { ServicosComponent } from './servicos/servicos.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
      },
      {
        path: 'sobre',
        component: SobreComponent,
        title: 'Sobre'
      },
      {
        path: 'orcamento',
        component: OrcamentoComponent,
        title: 'Orçamento'
      },
      {
        path: 'fornecedores',
        component: FornecedoresComponent,
        title: 'Fornecedores'
      },
      {
        path: 'servicos',
        component: ServicosComponent,
        title: 'Serviços'
      }
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
