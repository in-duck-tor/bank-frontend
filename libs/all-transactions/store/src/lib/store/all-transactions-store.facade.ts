import { Injectable, inject } from '@angular/core';
import { Transaction } from '@bnk/all-transactions/domain';
import { tuiIsPresent } from '@taiga-ui/cdk';
import { BehaviorSubject, Observable, filter, map, switchMap } from 'rxjs';
import { GetAllAccountTransactionsApiService } from '../data-access/get-account-transactions-api.service';

@Injectable()
export class AllTransactionsStoreFacade {
  private readonly getAccountTransactionsApiService = inject(
    GetAllAccountTransactionsApiService,
  );

  //   TODO: разобраться с множеством запросов

  private accountNumber$ = new BehaviorSubject<string | null>(null);

  setAccountNumber(id: string) {
    this.accountNumber$.next(id);
  }

  getAccountNumber() {
    return this.accountNumber$;
  }

  getAllTransactions(): Observable<Array<Transaction>> {
    return this.accountNumber$.pipe(
      filter(tuiIsPresent),
      switchMap(accountNumber =>
        this.getAccountTransactionsApiService
          .loadTransactions({
            accountNumber,
          })
          .pipe(
            map(transactions =>
              transactions.map(transaction => ({
                id: transaction.id,
                type: transaction.type,
                status: transaction.status,
                startedAt: transaction.startedAt,
                finishedAt: transaction.finishedAt,
                depositOn: transaction.depositOn,
                withdrawFrom: transaction.withdrawFrom,
              })),
            ),
          ),
      ),
    );
  }

  getAllTransactionsTotals() {
    return this.getAllTransactions().pipe(
      map(transactions =>
        transactions.reduce(
          (prev, curr) => ({
            expenditure:
              prev.expenditure +
              (curr.withdrawFrom &&
              curr.withdrawFrom?.accountNumber === this.accountNumber$.value
                ? curr.withdrawFrom!.amount
                : 0),
            receipts:
              prev.receipts +
              (curr.depositOn &&
              curr.depositOn?.accountNumber === this.accountNumber$.value
                ? curr.depositOn!.amount
                : 0),
          }),
          {
            expenditure: 0,
            receipts: 0,
          },
        ),
      ),
    );
  }

  getAllTransactionsReceipts() {
    return this.getAllTransactionsTotals().pipe(
      map(transactions => transactions.receipts),
    );
  }

  getAllTransactionsExpenditure() {
    return this.getAllTransactionsTotals().pipe(
      map(transactions => transactions.expenditure),
    );
  }
}
