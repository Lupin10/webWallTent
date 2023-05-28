import { Component } from '@angular/core';
import { EmployeeTService } from 'src/app/service/employee-t.service'; 
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-t',
  templateUrl: './employee-t.component.html',
  styleUrls: ['./employee-t.component.css']
})
export class EmployeeTComponent {
  employeeTList: any = [] ;
  employeeForm = this.formBuilder.group({
    name:'',
    id_card:0,
    workstation:'', 
    birthday:'',
    admission_date:'',
    dismissal_date:''
  })
  constructor(
    private employeetService:EmployeeTService,
    private formBuilder: FormBuilder,
    private router: Router
  ){}
 
  ngOnInit(){
   this.getAllEmployees();
  }
  getAllEmployees(){
     this.employeetService.getAllEmployeeData().subscribe((data:{})=>{
       this.employeeTList = data;
     });
  }
  newEmployeeEntry(){
    this.employeetService.newEmployee(this.employeeForm.value).subscribe(
      ()=>{
        this.router.navigate(['/employeeT']).then(()=>{
          window.location.reload();
        })
      });
  }
}
