import {Component, Input, OnInit} from '@angular/core';
import {HotelElementModel} from '../../_models/hotel-element.model';
import {InsertHTLService} from '../../admin-insert-hotel.service';
import {AnswerModel} from '../../_models/answer.model';

@Component({
  selector: 'app-singleselect-insert',
  templateUrl: './singleselect-insert.component.html',
  styleUrls: ['./singleselect-insert.component.css']
})
export class SingleselectInsertComponent implements OnInit {
  @Input() i;
  @Input() insertService: InsertHTLService;
  private answers: AnswerModel[] = [];
  private selectedAnswer: AnswerModel;

  constructor(
  ) {
    this.selectedAnswer = new AnswerModel();

  }

  ngOnInit() {
  }

  private handleSingleSelect(answer): void {
    this.answers = []
    this.insertService.htlFields[this.i].givenAnswerList = [];
    this.selectedAnswer.answerID = answer.answerID;
    this.selectedAnswer.answerLabel = answer.answerLabel;
    this.answers.push(this.selectedAnswer);
    this.insertService.htlFields[this.i].givenAnswerList = this.answers;
    //console.log(this.insertService.htlFields[this.i].givenAnswerList.length + ' - ' + this.insertService.htlFields[this.i].givenAnswerList[0].answerID);
  }
}
