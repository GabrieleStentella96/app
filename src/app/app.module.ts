import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompletedPage } from './pagine/completed/completed.page';
import { TodoPage } from './pagine/todo/todo.page';
import { FormsComponent } from './componenti/forms/forms.component';
import { ItemsComponent } from './componenti/items/items.component';
import { HeaderComponent } from './componenti/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompletedPage,
    TodoPage,
    FormsComponent,
    ItemsComponent,
    HeaderComponent
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
