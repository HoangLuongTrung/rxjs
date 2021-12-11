import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-unit',
  templateUrl: './item-unit.component.html',
  styleUrls: ['./item-unit.component.scss']
})
export class ItemUnitComponent implements OnInit {
  @Input() nameItem: string = '';
  @Input() nameImage: string = '';
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  onClickItem(): void {
    this.onClick.emit();
  }
}
