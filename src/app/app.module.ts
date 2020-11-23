import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { ConditionalComponent } from './conditional/conditional.component';
import { SwitchComponent } from './switch/switch.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list'
import {MatChipsModule} from '@angular/material/chips';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
@NgModule({
  declarations: [
    AppComponent,
    ConditionalComponent,
    SwitchComponent,
    ForLoopComponent,
    SimpleFormComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatChipsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
