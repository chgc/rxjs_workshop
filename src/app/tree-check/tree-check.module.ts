import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree/tree.component';
import { IndeterminateCheckboxComponent } from './indeterminate-checkbox/indeterminate-checkbox.component';
import { PanelModule } from 'primeng/primeng';

@NgModule({
  imports: [CommonModule, PanelModule],
  declarations: [TreeComponent, IndeterminateCheckboxComponent],
  exports: [TreeComponent]
})
export class TreeCheckModule {}
