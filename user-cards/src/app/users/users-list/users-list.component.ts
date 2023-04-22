import { Component, HostListener, OnInit, Input } from '@angular/core';
import { BreakpointService } from 'src/app/shared/services/breakpoint.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input() selectOption = '';
  @Input() users: User[];
  breakpoint: number = 4;

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit() {
    this.breakpoint = this.breakpointService.setBreakpoint(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.breakpoint = this.breakpointService.setBreakpoint(window.innerWidth);
  }
}
