import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anil';
  names: string = "Collins Kiplagat"
  siteName= window.location.href
  dataName="Hero"
  n:string

  parentFunction(val){
    this.n=val
    console.log(val);
  }

  getName() {
    return this.names;
  }
  obj = [
    {
      name: "Coki",
      age: 25
    },
    {
      name: "Coki",
      age: 25
    },
    {
      name: "Coki",
      age: 25
    }
  ]


}
