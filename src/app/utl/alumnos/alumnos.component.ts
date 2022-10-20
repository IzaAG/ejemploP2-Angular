import { Component, Input, } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interfaces';
import { UtlService } from '../services/utl.service';

//import { Alumnos } from '@angular/core';//


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  // @Input() alumnosUtl:AlumnosUtl[]=[];

  //para hacer uso , se debe olocar el construcot//

 get alumnos(){
  return this.alumnosutl.alumnos;
 } 
 
  constructor(private alumnosutl:UtlService){}

  

}
