import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenidos a Angula';
  curso: string = 'Curso Spring 5 con Angular 7';
  profesor: string = 'Diego Moya';
}
