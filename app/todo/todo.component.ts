import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

interface Todo {
  "userid": string;
  "id": number;
  "todoItem": string;
  "date": Date;
}


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoForm!: FormGroup;

  name: any
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }


  ngOnInit(): void {
    this.http.get<any>("http://localhost:3000/todo").subscribe(res => {
      if (sessionStorage.getItem('role') === "Admin") this.list = res;
      else this.list = res.filter((todo: Todo) => {
        console.log(todo.userid);
        return todo.userid == sessionStorage.getItem("userid");

      })


    });
    this.todoForm = new FormGroup({
      id: new FormControl(''),
      todoItem: new FormControl(''),
      date: new FormControl(new Date())
    })
  }
  list: any[] = [];

  addTask() {
    console.log(this.todoForm.value);
    this.http.post<any>("http://localhost:3000/todo", { userid: sessionStorage.getItem("userid"), ...this.todoForm.value }).subscribe(res => {

      console.log("Task Added");
      this.list.push(this.todoForm.value)
    });


  }

  deleteTask(id: number) {
    console.log(id)
    this.list = this.list.filter(name => name.id !== id)
  }

}
