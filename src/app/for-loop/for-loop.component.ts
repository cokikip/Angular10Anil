import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {
  names =["Collins","Kiplagat","Kiprono"]
  today = Date.now()
  money = 2500;

  users= [
    {
      name:"Shaddy",
      age:24,
      career:"Java/Spring Developer"
    },
    {
      name:"Evans",
      age:23,
      career:"Java/Spring/Angular Developer"
    },
    {
      name:"Mavin",
      age:24,
      career:"Java/Python/Django/Angular Developer"
    },
    {
      name:"Collins",
      age:25,
      career:"Java/Spring/Python/Django/Vue/Angular Developer"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
