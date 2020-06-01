import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  titulo: string = 'Soy el título';
  dinero: Number = 2400;
  porcentaje: Number = 0.54;
  fechaNacimiento: Date = new Date('01/21/1990');
  loremIpsum: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. In culpa qui officia deserunt mollit anim id est laborum.';
  constructor() { }

  ngOnInit(): void {
  }

}
