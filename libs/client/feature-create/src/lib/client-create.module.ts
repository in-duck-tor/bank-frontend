import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ClientCreateService } from './client-create.service';
import { CreateClientApiService } from './data-access/create-client-api.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [CreateClientApiService, ClientCreateService],
})
export class ClientCreateModule {}
