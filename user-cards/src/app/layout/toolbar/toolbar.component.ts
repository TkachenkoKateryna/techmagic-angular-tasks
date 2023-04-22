import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() selectEvent = new EventEmitter<string>();
  @Output() searchEvent = new EventEmitter<string>();
  @Output() allSelectBtnClickEvent = new EventEmitter<void>();

  sortOptions: { value: string; label: string }[] = [
    { value: 'asc', label: 'Sort ASC' },
    { value: 'desc', label: 'Sort DESC' },
  ];
  selectedSort: string = '';

  onSelect(value: string) {
    this.selectEvent.emit(value);
  }

  onSearchChange(event: Event) {
    console.log('onSearchChange');
    this.searchEvent.emit((event.target as HTMLInputElement).value);
  }

  onAllSelectBtnClick() {
    this.allSelectBtnClickEvent.emit();
  }
}
