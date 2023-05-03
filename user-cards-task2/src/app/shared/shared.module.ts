import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';

import { LoaderComponent } from './components/loader/loader.component';
import { InputComponent } from './components/input/input.component';
import { ApiHttpService } from './services/api-http-service.service';
import { BreakpointService } from './services/breakpoint.service';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [LoaderComponent, InputComponent, ErrorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    LoaderComponent,
    InputComponent,
    ErrorComponent,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatSelectModule,
  ],
  providers: [ApiHttpService, BreakpointService],
})
export class SharedModule {}
