import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autor';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public miAutor:Autor
  constructor() 
  {
    this.miAutor = new Autor ("Josefina", "Gonzalez", "32");
  }
  enviar(nuevoNombre: HTMLInputElement)
  {
    console.log(this.miAutor.nombre);
    this.miAutor.nombre = nuevoNombre.value;
    console.log(this.miAutor.nombre)
  };
  enviarA(nuevoApellido: HTMLInputElement)
  {
    console.log(this.miAutor.apellido);
    this.miAutor.apellido = nuevoApellido.value;
    console.log(this.miAutor.apellido)
  };
  enviarE(nuevaEdad: HTMLInputElement)
  {
    console.log(this.miAutor.edad);
    this.miAutor.edad = nuevaEdad.value;
    console.log(this.miAutor.edad)
  };
  ngOnInit(): void {
  }
 
}

