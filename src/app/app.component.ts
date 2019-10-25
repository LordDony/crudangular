import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crudtics';
  isEdit : boolean = false;
  employees : any = [];
  employee = {
    id:'',
    name : '',
    email : '',
    phone : ''
  }
  ngOnInit() {
    this.getAllEmployees();
  }

  constructor(private empleadoService: EmpleadoService,private router: Router){}

  getAllEmployees(){
    this.empleadoService.getAllEmployees().subscribe((data:any)=>{
      this.employees = data.data;
    });
  };

  addEmployee(){
    this.empleadoService.addEmployee(this.employee).subscribe((res:any)=>{
      this.getAllEmployees();
      this.employee.name=null;
      this.employee.email=null;
      this.employee.phone=null;
    });
  };

  editEmployee(employee:any){
    this.isEdit = true;
    this.employee.name = employee.name;
    this.employee.email = employee.email;
    this.employee.phone = employee.phone;
    this.employee.id = employee.id;

  }
  
  updateEmployee(){
    console.log(this.employee);
    this.empleadoService.updateEmployee(this.employee).subscribe((res:any)=>{
      this.getAllEmployees();
      this.employee.name=null;
      this.employee.email=null;
      this.employee.phone=null;
      this.isEdit=false;
    });
  };

  deleteEmployee(id:string){
    this.empleadoService.deleteEmployee(id).subscribe((res:any)=>{
      this.getAllEmployees();
    });
  }

}
