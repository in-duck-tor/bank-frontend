import { Inject, Injectable } from '@angular/core';

import { LOCAL_STORAGE, WINDOW } from '@ng-web-apis/common';
import { BehaviorSubject } from 'rxjs';

const TUI_THEME_NIGHT_STORAGE_KEY = 'tuiNight';

@Injectable({
  providedIn: 'root',
})
export class ThemeService extends BehaviorSubject<boolean> {
  constructor(
    @Inject(WINDOW) public readonly win: Window,
    @Inject(LOCAL_STORAGE) public readonly storage: Storage,
  ) {
    super(
      storage.getItem(TUI_THEME_NIGHT_STORAGE_KEY) === 'true' ||
        (storage.getItem(TUI_THEME_NIGHT_STORAGE_KEY) === null &&
          win.matchMedia('(prefers-color-scheme: dark)').matches),
    );
  }

  public override next(night: boolean): void {
    this.storage.setItem(TUI_THEME_NIGHT_STORAGE_KEY, String(night));
    super.next(night);
  }

  public toggle(): void {
    this.next(!this.value);
  }
}
