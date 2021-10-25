import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Timeouts } from 'selenium-webdriver';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  loading;
  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar, private router:Router ) {
    this.form=this.fb.group({
      usuario:['',Validators.required],
      contraseña:['',Validators.required]
    })
   }

  
  ngOnInit(): void {
  } 
  ingresar(){
    console.log(this.form)
    const usuario= this.form.value.usuario;
    const contraseña= this.form.value.contraseña;

    if(usuario== 'Alfredo' && contraseña =="meno1234"){
this.aprobado();
this.fakeLoading();
    }else{
this.error();
this.form.reset();

    }
  }

  error(){
    this._snackBar.open('Usuario o contraeña ingresados son invalidos','',{
      duration: 5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
    
  }
  aprobado(){
    this._snackBar.open('Valido','',{
      duration: 500,
      horizontalPosition:'center',
      verticalPosition:'bottom'
  })
}
  fakeLoading(){
    this.loading=true;
    setTimeout(()=>{
this.router.navigate(['dashboard'])
    },1500);
  }
}
