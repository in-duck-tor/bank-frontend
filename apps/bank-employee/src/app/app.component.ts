import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeRu from '@angular/common/locales/ru';
import { Component, LOCALE_ID, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TUI_SANITIZER, TuiRootModule } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

registerLocaleData(localeRu);

@Component({
  standalone: true,
  imports: [RouterModule, TuiRootModule, HttpClientModule],
  selector: 'bank-employee-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    { provide: LOCALE_ID, useValue: 'ru' },
  ],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.http
      .get('http://89.19.214.8:8000/api/v1/bank')
      .subscribe(res => console.log(res));
  }
  http = inject(HttpClient);
}
