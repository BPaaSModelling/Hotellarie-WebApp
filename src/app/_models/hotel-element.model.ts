import {AnswerModel} from './answer.model';

export class HotelElementModel {
     propertyURI: string;
     propertyLabel: string;
     answerList: AnswerModel[];
     answerDatatype: string;
     givenAnswerList: AnswerModel[];
     searchNamespace: string;
     comparisonOperationAnswer: AnswerModel[];
     comparisonAnswer: string;
     typeOfAnswer: string;
     domain: string;
     annotationRelation: string;
     searchOnClassesInsteadOfInstances: boolean;
}
