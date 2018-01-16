import {Component, Input, OnInit} from '@angular/core';
import {HotelElementModel} from '../../_models/hotel-element.model';
import {InsertHTLService} from '../../admin-insert-hotel.service';

@Component({
  selector: 'app-value-insert',
  templateUrl: './value-insert.component.html',
  styleUrls: ['./value-insert.component.css']
})
export class ValueInsertComponent implements OnInit {
  @Input() i;
  @Input() insertService: InsertHTLService;
  private comparisonAnswerCode: string;


  constructor(
  ) {
  }

  ngOnInit() {
  }

  private handleOperationsSingleSelect(answerCode: string): void {
    this.insertService.htlFields[this.i].comparisonAnswer = answerCode;
    //this.comparisonAnswerCode = answerCode;
    console.log('set comparisonAnswer ' + this.comparisonAnswerCode);
  }
}
