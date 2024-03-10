import { Injectable, inject } from '@angular/core';
import { Account, AccountStatus } from '@bnk/all-accounts/domain';
import { tuiIsPresent } from '@taiga-ui/cdk';
import { BehaviorSubject, Observable, filter, map, switchMap } from 'rxjs';
import { GetAllUserAccountsApiService } from '../data-access/get-user-accounts-api.service';

@Injectable()
export class AllAccountsStoreFacade {
  private readonly getUserAccountsApiService = inject(
    GetAllUserAccountsApiService,
  );

  private userId$ = new BehaviorSubject<number | null>(null);

  setUserId(id: number) {
    this.userId$.next(id);
  }

  getAllAccounts(): Observable<Array<Account>> {
    return this.userId$.pipe(
      filter(tuiIsPresent),
      switchMap(id =>
        this.getUserAccountsApiService
          .loadAccounts({
            ownerId: id,
          })
          .pipe(
            map(result => result.items),
            map(accounts =>
              accounts.map(account => ({
                number: account.number,
                currencyCode: account.currencyCode,
                amount: account.amount,
                state: account.state,
                comment: account.customComment,
                type: account.type,
              })),
            ),
          ),
      ),
    );
  }

  getActiveAccounts() {
    return this.getAllAccounts().pipe(
      map(accounts =>
        accounts.filter(account => account.state === AccountStatus.Active),
      ),
    );
  }

  getClosedAccounts() {
    return this.getAllAccounts().pipe(
      map(accounts =>
        accounts.filter(account => account.state === AccountStatus.Closed),
      ),
    );
  }
}
