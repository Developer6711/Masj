import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  listaCursos=[{
    titulo:"Curso Angular",
    fecha:"21/09/2021",
    hora:"09:00-14:00",
    docente:"Raul Torres",
    urlImage:"assets/cursoangular.png"
  },
  {
    titulo:"Curso SQL Server",
    fecha:"10/09/2021",
    hora:"09:00-14:00",
    docente:"Luis Valencia",
    urlImage:"assets/cursoSQL.png"
  },
  {
    titulo:"Curso Visual Studio",
    fecha:"19/09/2021",
    hora:"09:00-14:00",
    docente:"Pedro Velarde",
    urlImage:"assets/cursoVisual.png"
  }

];

  ngOnInit(): void {
  }

}
