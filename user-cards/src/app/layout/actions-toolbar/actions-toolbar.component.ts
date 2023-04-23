import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-actions-toolbar',
  templateUrl: './actions-toolbar.component.html',
  styleUrls: ['./actions-toolbar.component.scss'],
})
export class ActionsToolbarComponent {
  @Output() sortEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<void>();
  @Output() searchEvent = new EventEmitter<string>();
  @Output() allSelectEvent = new EventEmitter<void>();
  @Input() selectedUsersIds: number[];

  sortOptions: SortOption[] = [
    { value: 'asc', label: 'Sort ASC' },
    { value: 'desc', label: 'Sort DESC' },
  ];
  selectedSort: string = '';

  onSelect(value: string) {
    this.sortEvent.emit(value);
  }

  onSearchChange(event: Event) {
    this.searchEvent.emit((event.target as HTMLInputElement).value);
  }

  onSelectAll() {
    this.allSelectEvent.emit();
  }

  onDelete() {
    this.deleteEvent.emit();
  }
}
