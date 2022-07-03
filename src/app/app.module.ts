import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletedPage } from './pagine/completed/completed.page';
import { TodoPage } from './pagine/todo/todo.page';
import { AppformComponent } from './componenti/appform/appform.component';
import { ElementComponent } from './componenti/element/element.component';
import { NavbarComponent } from './componenti/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompletedPage,
    TodoPage,
    AppformComponent,
    ElementComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
