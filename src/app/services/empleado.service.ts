import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../api/api';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private api = new API();
  constructor(private http: HttpClient) { }


  getAllEmployees(){
    return this.http.get(this.api.employees);
  }

  addEmployee(employee: any){
    return this.http.post(this.api.employee,{
      name: employee.name,
      email: employee.email,
      phone: employee.phone
    });
  };

  updateEmployee(employee:any){
    console.log(employee)
    return this.http.put(this.api.employee+'/'+employee.id,{
      name: employee.name,
      email: employee.email,
      phone: employee.phone
    });
  };

  deleteEmployee(id:string){
    return this.http.delete(this.api.employee+'/'+id);
  };


}
