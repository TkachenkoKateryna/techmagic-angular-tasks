import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './store/app-store';
import { getUserError } from './users/state/users.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  errorMessage$: Observable<string>;
  searchTerm: string;
  sortOption: string;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.errorMessage$ = this.store.select(getUserError);
  }

  sort(option: string) {
    this.sortOption = option;
  }

  search(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}
