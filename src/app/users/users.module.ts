import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    NgbModule

  ],
  exports:[
    UserListComponent
  ]
})
export class UsersModule { }
