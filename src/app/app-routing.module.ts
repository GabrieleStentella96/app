import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedPage } from './pagine/completed/completed.page';
import { TodoPage } from './pagine/todo/todo.page';

const routes: Routes = [
  { path: 'todo',
  component: TodoPage

  },
  { path: 'completed',
  component: CompletedPage

  },
  { path: '',
    pathMatch: 'full',
    redirectTo: 'todo'

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
