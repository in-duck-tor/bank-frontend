import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeRu from '@angular/common/locales/ru';
import { Component, LOCALE_ID, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '@bnk/shared/util-theme';
import {
  TUI_SANITIZER,
  TuiBrightness,
  TuiModeModule,
  TuiRootModule,
  TuiThemeNightModule,
} from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

registerLocaleData(localeRu);

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TuiRootModule,
    HttpClientModule,
    TuiThemeNightModule,
    TuiModeModule,
  ],
  selector: 'bank-employee-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    { provide: LOCALE_ID, useValue: 'ru' },
  ],
})
export class AppComponent {
  public readonly nightMode$ = inject(ThemeService);

  get mode(): TuiBrightness | null {
    return this.nightMode$.value ? 'onDark' : null;
  }
}
