import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  listUsuarios: Usuario[] = [
    {id: 1, nombre: 'Alfredo', apellido: 'Perez', usuario: 'meno'},
    {id: 2, nombre: 'Brenda', apellido: 'Reyes', usuario: 'bren'},
    {id: 3, nombre: 'Alejandro', apellido: 'Perez', usuario: 'ale'},
    {id: 4, nombre: 'Stephany', apellido: 'Zavala', usuario: 'steph'},
    {id: 5, nombre: 'Ricardo', apellido: 'Lopez', usuario: 'rich'},
    {id: 6, nombre: 'Alfredo', apellido: 'Perez', usuario: 'meno'},
    {id: 7, nombre: 'Brenda', apellido: 'Reyes', usuario: 'bren'},
    {id: 8, nombre: 'Alejandro', apellido: 'Perez', usuario: 'ale'},
    {id: 9, nombre: 'Stephany', apellido: 'Zavala', usuario: 'steph'},
    {id: 10, nombre: 'Ricardo', apellido: 'Lopez', usuario: 'rich'}
  ];


  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index,1);  
  }
  agregarUsuario(usuario:Usuario){
  this.listUsuarios.unshift();
  }
}
