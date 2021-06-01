import { Injectable } from '@angular/core';
import { Articulo } from 'models/articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private articulos: Array<Articulo> = [
    {nombre: 'Naranjas', categoria: 'Frutas', stock: 500, precio: 10},
    {nombre: 'Leche', categoria: 'Lacteos', stock: 20, precio: 2.2},
    {nombre: 'Yogur', categoria: 'Lacteos', stock: 120, precio: 0.80},
    {nombre: 'Fresas', categoria: 'Frutas', stock: 0, precio: 15},
    {nombre: 'Nueces', categoria: 'Frutos secos', stock: 60, precio: 22},
    {nombre: 'Helado Limón', categoria: 'Congelados', stock: 125, precio: 1.25},
    {nombre: 'Helado Naranja', categoria: 'Congelados', stock: 130, precio: 1.25},
    {nombre: 'Agua', categoria: 'Bebidas', stock: 2360, precio: 0.24},
    {nombre: 'Cerveza', categoria: 'Bebidas', stock: 0, precio: 0.89},
    {nombre: 'Vino', categoria: 'Bebidas', stock: 60, precio: 10},
  ]

  constructor() { }

  getArticulos(): Array<Articulo> {
    return this.articulos;
  }
}
