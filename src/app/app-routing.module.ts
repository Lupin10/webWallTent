import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTComponent } from './components/employee-t/employee-t.component';

const routes: Routes = [
  {path: 'employeeT',component:EmployeeTComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
