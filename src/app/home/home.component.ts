import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bgcolor="Black"
  err=false

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(){
    this.bgcolor="yellow"
    this.err=!this.err
  }
}
