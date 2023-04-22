import {
  Component,
  HostListener,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BreakpointService } from 'src/app/layout/services/breakpoint.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  private eventsSubscription: Subscription;
  @Input() selectOption = '';
  @Input() users: User[];
  @Output() selectEvent = new EventEmitter<number[]>();
  @Input() events: Observable<void>;
  selectedUsersIds: number[] = [];
  breakpoint: number = 4;

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit() {
    this.breakpoint = this.breakpointService.setBreakpoint(window.innerWidth);
    this.eventsSubscription = this.events.subscribe(() => this.allSelect());
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.breakpoint = this.breakpointService.setBreakpoint(window.innerWidth);
  }

  check(value: number) {
    if (this.selectedUsersIds.includes(value)) {
      this.selectedUsersIds = this.selectedUsersIds.filter(
        (id) => id !== value
      );
    } else {
      this.selectedUsersIds.push(value);
    }
    this.selectEvent.emit(this.selectedUsersIds);
  }

  allSelect() {
    this.selectedUsersIds = this.users.map((user) => user.id);
    this.selectEvent.emit(this.selectedUsersIds);
  }
}
