import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { SwitchComponent } from './switch/switch.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: UserListComponent },
  { path: 'conditions', component: ConditionalComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'forloop', component: ForLoopComponent },
  { path: 'simpleform', component: SimpleFormComponent },
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
