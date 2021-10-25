import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  form :FormGroup;
  constructor(private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private _usuarioService:UsuarioService,
              private router:Router) { 
    this.form=this.fb.group({
      id:['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      usuario:['',Validators.required],
      
    })
  }


  ngOnInit(): void {
  }

  agregarUsuario(){
    console.log(this.form);
const user: Usuario={
  id:this.form.value.id,
  nombre:this.form.value.nombre,
  apellido:this.form.value.apellido,
  usuario:this.form.value.usuario

}
this._usuarioService.agregarUsuario(user);
this.router.navigate(['/dashboard/usuarios'])

    this._snackBar.open('Usuario agregado','',{
      duration: 500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
  })
  }

}
