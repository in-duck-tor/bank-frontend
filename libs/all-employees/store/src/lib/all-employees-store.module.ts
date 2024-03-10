import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GetEmployeesApiService } from './data-access/get-employees-api.service';
import { AllEmployeesStoreFacade } from './store/all-employees-store.facade';

@NgModule({
  imports: [HttpClientModule],
  providers: [GetEmployeesApiService, AllEmployeesStoreFacade],
})
export class AllEmployeesStoreModule {}
