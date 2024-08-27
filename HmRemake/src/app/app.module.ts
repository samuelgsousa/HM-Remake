import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  imports: [
    // Outros imports...
    CollapseModule.forRoot()
  ],
})
export class AppModule {}
