import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input('hotelItem') hotel;

  @Output() hotelSelected: EventEmitter<any> = new EventEmitter();

  selectHotel() {
    this.hotelSelected.emit();
  }
}
