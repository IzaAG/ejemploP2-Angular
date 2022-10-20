import { Injectable } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { AlumnosUtl } from '../interfaces/utl.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UtlService {

   private alumnosUtl:AlumnosUtl[]=[
    {
      nombre:'Mario',
    edad:22
      
    },
    {
      nombre:'Andrés',
      edad:29
    },
    {
      nombre:'Estefania',
      edad:22
    }
  ]

  get alumnos(): AlumnosUtl[]{
    return [...this.alumnosUtl]//lleva _ porque es privada//
    
  }

  constructor() { }
  agregarNuevoAlumno(argumento:AlumnosUtl){
    this.alumnosUtl.push(argumento);
  }


  muestra(){
    console.log('nombre')
  }
}
