import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
 
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class InicioComponent implements OnInit {

  selected:Date | null;
  constructor(private _adapter: DateAdapter<any>) {}


  español() {
    this._adapter.setLocale('es-MX');
  }

  
  ngOnInit(): void {
  }

}
