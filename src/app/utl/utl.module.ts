import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AgregarComponent } from './agregar/agregar.component';
import { UtlService } from './services/utl.service';



@NgModule({
  declarations: [
    MainPageComponent,
    AlumnosComponent,
    AgregarComponent
  ],
  //esportamos la clase 1er paso//
  exports:[
      MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  //para usar el servicio//
  
  providers:[
    UtlService
  ]
})
export class UtlModule { }
