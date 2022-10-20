import {Component } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interfaces'; 
import { UtlService } from '../services/utl.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  // alumnosUtl:AlumnosUtl[]=[
  //   {
  //     nombre:'Mario',
  //   edad:22
      
  //   },
  //   {
  //     nombre:'Andrés',
  //     edad:29
  //   },
  //   {
  //     nombre:'Estefania',
  //     edad:22
  //   }
  // ]



  regAlum:AlumnosUtl={
    nombre:'',
    edad:0
  }

  // constructor(private UtlService:UtlService){}
  constructor(){}

  // agregarNuevoAlumno(pedro:AlumnosUtl){
  //   this.alumnosUtl.push(pedro);
  // }
  
    
  
  
  

  
  
}
