import { Component, OnInit } from '@angular/core';
import { Element } from 'src/app/classi/element';
import { ToDoService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-forms',
  templateUrl: './appform.component.html',
  styleUrls: ['./appform.component.scss']
})
export class AppformComponent implements OnInit {

  title!: string;
  id!:number;
  completed!:boolean;
  

  constructor(private elementService: ToDoService) { }

  ngOnInit(): void {
  }

  aggiungiTask(): void {
    let object = new Element(this.title, this.completed, this.id);
    this.elementService.newTask(object);
    this.title = '';
    

  }

}
