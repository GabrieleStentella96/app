import { Component, OnInit } from '@angular/core';
import { Element } from 'src/app/classi/element';
import { ToDoService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

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
