import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaccia/todo';
import { ToDoService } from 'src/app/service/todos.service';


@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

  elementi!: Todo[];
  rimuovi: boolean = true;
  serviceElementi: any;
  elementService: any;

  constructor(serviceElementi: ToDoService) { }

  ngOnInit(): void {
    this.elementi = this.serviceElementi.getItemList()
  
  }

  cancellaTask(a: Todo) {
    this.elementService.rimuoviTask(a);

  }

  ultimaTask(a: Todo): void {
    this.elementService.completaTask(a);
   
   
  }

}
