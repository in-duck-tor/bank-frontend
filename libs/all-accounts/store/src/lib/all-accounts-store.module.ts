import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GetAllUserAccountsApiService } from './data-access/get-user-accounts-api.service';
import { AllAccountsStoreFacade } from './store/all-accounts-store.facade';

@NgModule({
  imports: [HttpClientModule],
  providers: [GetAllUserAccountsApiService, AllAccountsStoreFacade],
})
export class AllAccountsStoreModule {}
