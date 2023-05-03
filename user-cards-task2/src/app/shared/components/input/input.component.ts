import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() control: FormControl;
  @Input() name: string;
  @Input() type: string;
  @Input() label: string;
  placeholder: string;

  ngOnInit() {
    this.placeholder = `Enter your ${this.label.toLowerCase()}, please`;
  }

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && errors && touched;
  }
}
