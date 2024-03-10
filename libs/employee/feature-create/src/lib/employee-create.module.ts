import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CreateEmployeeApiService } from './data-access/create-employee-api.service';
import { EmployeeCreateService } from './employee-create.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [CreateEmployeeApiService, EmployeeCreateService],
})
export class EmployeeCreateModule {}
