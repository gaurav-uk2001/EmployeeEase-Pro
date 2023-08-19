import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http:HttpClient) { }

  //create Data
  addEmployee(data:any): Observable<any>{
    return this.http.post("https://64da2ce1e947d30a260ae6c5.mockapi.io/CRUD_App", data);
  }

  // Update data
  updateEmployee(id:number, data:any):Observable<any>{
    return this.http.put(`https://64da2ce1e947d30a260ae6c5.mockapi.io/CRUD_App/${id}`, data)
  }

  //fetch Data
  getAllEmployee():Observable<any>{
    return this.http.get("https://64da2ce1e947d30a260ae6c5.mockapi.io/CRUD_App");
  }

  // Delete data
  deleteEmployee(id:any):Observable<any>{
    return this.http.delete(`https://64da2ce1e947d30a260ae6c5.mockapi.io/CRUD_App/${id}`)
  }


}
