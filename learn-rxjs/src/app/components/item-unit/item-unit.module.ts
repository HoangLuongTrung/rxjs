import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemUnitComponent } from './item-unit.component';

@NgModule({
  exports: [ItemUnitComponent],
  declarations: [
    ItemUnitComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ItemUnitModule { }
