import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { Component, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TUI_SANITIZER, TuiRootModule } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

registerLocaleData(localeRu);

@Component({
  standalone: true,
  imports: [RouterModule, TuiRootModule],
  selector: 'bank-employee-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    { provide: LOCALE_ID, useValue: 'ru' },
  ],
})
export class AppComponent {}
