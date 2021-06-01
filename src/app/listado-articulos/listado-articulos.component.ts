import { Component, OnInit } from '@angular/core';
import { Articulo } from 'models/articulo.model';
import { ArticulosService } from '../servicios/articulos.service';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.scss']
})
export class ListadoArticulosComponent implements OnInit {

  articulos: Array<Articulo> =[];

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.articulos = this.articulosService.getArticulos();
  }

}
