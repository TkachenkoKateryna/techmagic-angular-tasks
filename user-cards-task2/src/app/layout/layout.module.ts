import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ActionsToolbarComponent } from './actions-toolbar/actions-toolbar.component';

@NgModule({
  declarations: [ToolbarComponent, ActionsToolbarComponent],
  imports: [CommonModule, SharedModule],
  exports: [ActionsToolbarComponent, ToolbarComponent],
})
export class LayoutModule {}
