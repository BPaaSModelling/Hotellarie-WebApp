import {Component, Input, OnInit} from '@angular/core';
import {SearchResultModel} from '../../_models/searchresult.model';
import {HotelElementModel} from '../../_models/hotel-element.model';
import {InsertHTLService} from '../../admin-insert-hotel.service';
import {AnswerModel} from '../../_models/answer.model';

@Component({
  selector: 'app-search-insert',
  templateUrl: './search-insert.component.html',
  styleUrls: ['./search-insert.component.css']
})
export class SearchInsertComponent implements OnInit {
  @Input() i: number;
  @Input() insertService: InsertHTLService;
  @Input() propertyLabel: string;
  private selectedAnswer: AnswerModel;
  private textlabel: string;
  private queriedIndex: number;
  private answerList;
  constructor(

      ) {

  }

  ngOnInit() {
    this.selectedAnswer = new AnswerModel();
    this.selectedAnswer.answerLabel = "";
    this.selectedAnswer.answerID = "";
    this.insertService.htlFields[this.i].givenAnswerList.push(this.selectedAnswer);
    this.queriedIndex = -1;
  this.answerList = null;
  }

  private search(term: string, index: number): void {
      
    this.insertService.searchResults$ = null;
    this.queriedIndex = this.i;
    //console.log("queried index is now: " + this.queriedIndex)
    this.insertService.search(this.insertService.htlFields[this.i].searchNamespace, term, this.insertService.htlFields[this.i].searchOnClassesInsteadOfInstances);
  }

  private handleSearchSelect(item:SearchResultModel):void{
    //console.log("queried index is still: " + this.queriedIndex)
    this.insertService.htlFields[this.i].givenAnswerList[0].answerID = item.uri;
    this.insertService.htlFields[this.i].givenAnswerList[0].answerLabel = item.label;
    this.insertService.searchResults$ = null;
  this.queriedIndex = -1;
  }


}

