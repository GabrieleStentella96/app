import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaccia/todo';
import { ToDoService } from 'src/app/service/todos.service';

@Component({
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss']
})
export class TodoPage implements OnInit {
    id!: any
    title!: string
    element!: string
    elementlist: Todo[] = [
    

    {id: 1, title: 'Studiare HTML', completed: false},
    {id: 2, title: 'Studiare CSS', completed: false},
    {id: 3, title: 'Studiare Bootstrap', completed: false},
    {id: 4, title: 'Studiare JavaScript', completed: false},
    {id: 5, title: 'Studiare Typescript', completed: false}

  ];
  elementService: any;

  constructor(private todo:ToDoService) { }

  ngOnInit(): void {
  }

  listaTask(a: Todo): void {
    this.todo.listaTask();
  }

  mostraTask(): Todo[] {
    return this.elementlist;
  }

  aggiungiTask(): void {
    let object = new Element();
    this.elementService.newTask(object);
    this.title = '';
    

  }
  

}
