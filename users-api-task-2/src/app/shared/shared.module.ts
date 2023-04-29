import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ApiHttpService } from './services/api-http-service.service';
import { ModalComponent } from './components/modal/modal.component';
import { LoaderComponent } from './components/loader/loader.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [ModalComponent, LoaderComponent, InputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ModalComponent, LoaderComponent, InputComponent],
  providers: [ApiHttpService],
})
export class SharedModule {}
