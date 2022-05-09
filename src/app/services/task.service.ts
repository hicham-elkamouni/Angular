import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Task } from '../Task'


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:4999/tasks';

  constructor(private http : HttpClient) { }

  // with observables
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  // without observables
  // getTasks(): Task[] {
  //   return TASKS;
  // }
}
