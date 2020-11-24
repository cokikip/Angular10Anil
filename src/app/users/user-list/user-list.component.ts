
import { UsersService } from './../users.service';
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
  user={}
  comments:any =[];
  commentSearch:string
  page = 1
  pageSize=10
  @Input() hero;
  @Output() parentFunction:EventEmitter<any> = new EventEmitter();

  constructor(private userService:UsersService) {

  }

  ngOnInit(): void {
    this.parentFunction.emit(this.collins);
    this.getData()
    this.getComments()
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
  getData(){
    this.user=this.userService.getData();
    console.log(this.user);
  }
  getComments(){
    this.userService.getValues().subscribe(
      data=>{
        this.comments=data
      }
    )
    console.log(this.comments);
  }
}
