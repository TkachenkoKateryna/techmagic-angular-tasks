import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { ActionsToolbarComponent } from './actions-toolbar/actions-toolbar.component';

@NgModule({
  declarations: [ToolbarComponent, ActionsToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
  ],
  exports: [ActionsToolbarComponent, ToolbarComponent],
})
export class LayoutModule {}
