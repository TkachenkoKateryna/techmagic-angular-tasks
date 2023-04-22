import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Output() onCheckEvent = new EventEmitter<number>();
  @Input() user: User;
  @Input() selectedUsersIds: number[];

  onCheck(value: number) {
    this.onCheckEvent.emit(value);
  }
}
