import {
	Component,
	ElementRef,
	OnInit,
	Output,
	EventEmitter,
} from '@angular/core';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
	@Output() close = new EventEmitter();

	constructor(private el: ElementRef) {}

	ngOnInit() {
		document.body.append(this.el.nativeElement);
	}

	ngOnDestroy() {
		this.el.nativeElement.remove();
	}

	onCloseClick() {
		this.close.emit();
	}
}
