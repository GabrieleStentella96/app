import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaccia/todo';
import { ActivatedRoute } from '@angular/router';
import { ToDoService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-appform',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss']
})
export class CompletedPage implements OnInit {

  elementi!: Todo[]


  constructor(private route: ActivatedRoute,
    private todoService: ToDoService) { }

  ngOnInit(): void {
    this.elementi = this.todoService.listaTask()
  }

}
