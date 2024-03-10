import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GetAllAccountTransactionsApiService } from './data-access/get-account-transactions-api.service';
import { AllTransactionsStoreFacade } from './store/all-transactions-store.facade';

@NgModule({
  imports: [HttpClientModule],
  providers: [GetAllAccountTransactionsApiService, AllTransactionsStoreFacade],
})
export class AllTransactionsStoreModule {}
