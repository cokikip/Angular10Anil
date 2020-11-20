import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  collins = "Collins"
  usersData:string=""
  disableBtn=true
  @Input() hero;
  @Output() parentFunction:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.parentFunction.emit(this.collins);
  }
  getName(name){
    alert ( name);
  }
  today:Date =new Date();
  myEvent(detail){
    console.log(detail);

  }
  getValue(data){
    console.log(data);

    this.usersData=data;
  }

  enableBtn(){
    this.disableBtn=false;
  }
  sendData(){
    this.parentFunction.emit(this.collins);
  }
}
