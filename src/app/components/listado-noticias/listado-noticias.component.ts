import { Component, Input , OnInit} from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.css']
})
export class ListadoNoticiasComponent {

  urlD: string = '';

  @Input() listNoticias: any;
  @Input() categoriaSola: any;

  /*general { value: 'business', nombre: 'Negocios'},
  { value: 'entertainment', nombre: 'Entretenimiento'},
  { value: 'health', nombre: 'Salud'},
  { value: 'science', nombre: 'Ciencia'},
  { value: 'sports', nombre: 'Deportes'},
  { value: 'technology' ) { */

}
