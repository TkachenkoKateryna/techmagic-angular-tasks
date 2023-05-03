import { Component, HostListener, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { BreakpointService } from 'src/app/shared/services/breakpoint.service';
import { AppState } from 'src/app/store/app-store';
import { getUsers, usersLoading } from '../../state/users.selectors';
import { getAllUsersAction } from '../../state/users.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input() searchTerm: string;
  @Input() sortOption: string;
  users$ = this.store.select(getUsers);
  isLoading$ = this.store.select(usersLoading);
  breakpoint: number = 4;

  constructor(
    private breakpointService: BreakpointService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.breakpoint = this.breakpointService.setBreakpoint(window.innerWidth);
    this.store.dispatch(getAllUsersAction());
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.breakpoint = this.breakpointService.setBreakpoint(window.innerWidth);
  }
}
