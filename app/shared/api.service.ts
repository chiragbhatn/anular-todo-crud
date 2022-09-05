import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postTodolist(data: any) {
    return this.http.post<any>("http://localhost:3000/todo", data).pipe(map((res: any) => {
      return res;

    }))
  }
  getTodolist(data: any) {
    return this.http.get<any>("http://localhost:3000/todo").pipe(map((res: any) => {
      return res;
    }))

  }
  updateTodolist(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/todo", data).pipe(map((res: any) => {
      return res;

    }))
  }
  deleteTodolist(id: number) {
    return this.http.delete<any>("http://localhost:3000/todo/" + id).pipe(map((res: any) => {
      return res;

    }))
  }
}
