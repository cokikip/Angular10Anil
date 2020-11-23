import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  comments="http://localhost:3000/comments";

  constructor(private http:HttpClient) { }

  getData(){
    return {
      name:"Collins",
      age:25,
      id:15
    }
  }
  getValues(){
    return this.http.get(this.comments);

    }
}
