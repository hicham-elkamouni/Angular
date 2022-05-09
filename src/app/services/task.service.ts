import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs'
import { Task } from '../Task'
import { TASKS } from '../mock-tasks';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // with observables
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }

  // without observables
  // getTasks(): Task[] {
  //   return TASKS;
  // }
}
