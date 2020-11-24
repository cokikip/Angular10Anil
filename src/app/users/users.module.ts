import { CommentTextFilterPipe } from './../shared/comment-text-filter.pipe';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [
    UserListComponent,
    CommentTextFilterPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,

  ],
  exports:[
    UserListComponent
  ]
})
export class UsersModule { }
