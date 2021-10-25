import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _adapter: DateAdapter<any>) {}

  español() {
    this._adapter.setLocale('es');
  }

  ngOnInit(): void {
  }

}
