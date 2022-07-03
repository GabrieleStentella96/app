import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaccia/todo';
import { ToDoService } from 'src/app/service/todos.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  elementi!: Todo[];
  rimuovi: boolean = true;
  serviceElementi: any;
  elementService: any;

  constructor(serviceElementi: ToDoService) { }

  ngOnInit(): void {
  
  
  }

  cancellaTask(a: Todo) {
    this.elementService.rimuoviTask(a);

  }

  ultimaTask(a: Todo): void {
    this.elementService.completaTask(a);
   
   
  }

}
