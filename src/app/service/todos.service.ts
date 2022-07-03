import { Injectable } from '@angular/core';
import { Todo } from '../interfaccia/todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  aggiungiTask(object: Element) {
    throw new Error('Method not implemented.');
  }
  

  private elementlist: Todo[] = [

    {id: 1, title: 'Studiare HTML', completed: false},
    {id: 2, title: 'Studiare CSS', completed: false},
    {id: 3, title: 'Studiare Bootstrap', completed: false},
    {id: 4, title: 'Studiare JavaScript', completed: false},
    {id: 5, title: 'Studiare Typescript', completed: false}

  ];

  constructor() { }

  listaTask(): Todo[] {
    return this.elementlist;
  }

  newTask(a: Todo): void {
    if (a.title !== undefined) {
    this.elementlist.push(a);
    console.log(a)
  }
  else {
    alert('Devi inserire per forza una task!')
  }
  }

  rimuoviTask(a: Todo): void {
    let list = this.elementlist.indexOf(a);
    this.elementlist.splice(list, 1);
  }

  prendiTask(i: number): Todo {
    return this.elementlist[i];
  }

  completaTask(a: Todo): void {
    a.completed = true;
    
  }


  
  

 
}
