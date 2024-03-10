import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GetClientsApiService } from './data-access/get-clients-api.service';
import { AllClientsStoreFacade } from './store/all-clients-store.facade';

@NgModule({
  imports: [HttpClientModule],
  providers: [GetClientsApiService, AllClientsStoreFacade],
})
export class AllClientsStoreModule {}
