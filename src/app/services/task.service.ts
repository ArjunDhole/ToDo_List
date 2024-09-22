import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.class';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public API_URL = 'http://localhost:51121/api/task';
  constructor(public http: HttpClient) { }
  /**
   * các hàm xử lý api
   */
  getAll(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/getall`);
  }
  /**
   * thêm mới
   * @param task : object task
   */
  add(task: Task): Observable<Task[]> {
    return this.http.post<Task[]>(`${this.API_URL}/add`, {
      title: task.Title,
      completed: task.Completed
    });
  }
  /**
   * s
   * @param id id
   * @param status 
   */
  updateStatus(id: number, status: boolean): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/status/${id}/${status}`);
  }
  /**
   * 
   */
  update(task: Task): Observable<Task[]> {
    return this.http.put<Task[]>(`${this.API_URL}/update`, {
      id: task.Id,
      title: task.Title,
      completed: task.Completed
    });
  }
  /**
   * 
   */
  delete(task: Task): Observable<Task[]> {
    return this.http.post<Task[]>(`${this.API_URL}/delete`, {
      id: task.Id,
      title: task.Title,
      completed: task.Completed
    });
  }
}
