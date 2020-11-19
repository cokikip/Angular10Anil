import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  collins = "Collins"

  constructor() { }

  ngOnInit(): void {
  }
  getName(name){
    alert ( name);
  }
  today:Date =new Date();
  myEvent(detail){
    console.log(detail);

  }
}
