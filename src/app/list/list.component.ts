import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input('hotelItem') hotel: IHotel;
  @Input() activeClass: boolean;

  @Output() hotelSelected: EventEmitter<any> = new EventEmitter;

  public selectHotel() {
    this.hotelSelected.emit();
  }
}
