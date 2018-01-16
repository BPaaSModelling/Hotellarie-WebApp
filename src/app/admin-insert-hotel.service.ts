import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, QueryEncoder, URLSearchParams, Jsonp} from '@angular/http';
import {EndpointSettings} from './_settings/endpoint.settings';
import {HotelElementModel} from './_models/hotel-element.model';
import {HotelModel} from './_models/hotel.model';
//import {Observable} from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import {SearchResultModel} from './_models/searchresult.model';
import {getResponseURL} from '@angular/http/src/http_utils';
import {VariableSettings} from './_settings/variable.settings';

@Injectable()
export class  InsertHTLService {

    htlModel: HotelModel;
    htlFields: HotelElementModel[] = [];
    htlDomain: string[] = [];
    public htlField$: Observable<HotelElementModel[]> = Observable.of([]);
    public domain$: Observable<string[]> = Observable.of([]);
    searchResults$: Observable<SearchResultModel[]> = Observable.of([]);
    private options: RequestOptions;
    private variables: VariableSettings;

    constructor(
        private http: Http,
        private jsonp: Jsonp) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: headers });
        this.variables = new VariableSettings;
    }

    queryHTLModel(): void {

        this.http.get(EndpointSettings.getHotelElementsEndpoint())
            .map(response => response.json()).subscribe(
            data => {
                console.log('Hotels received: ' + JSON.stringify(data));
                this.htlField$ = Observable.of(data);
                this.htlFields = data;
                console.log('Elements parsing with success!');

                for (let i = 0; i< this.htlFields.length; i++) {
                    if (this.htlDomain.length === 0){
                        this.htlDomain.push(this.htlFields[0].domain);
                    }
                    var found_new_domain = false;
                    for (let j = 0; j < this.htlDomain.length; j++ ) {
                        if (this.htlFields[i].domain === this.htlDomain[j]) {
                            found_new_domain = true;
                        }
                    }
                    if (!found_new_domain){
                        this.htlDomain.push(this.htlFields[i].domain);
                    }
                    this.domain$ = Observable.of(this.htlDomain);
                }
                this.domain$ = Observable.of(this.htlDomain);

            }
            , error => console.log('Could not query hotel fields'));

    }

    public search(ns: string, term: string, classes: boolean) {

        // console.log("search received: " + ns +" :: " + term + " :: " + classes);

        let search: URLSearchParams = new URLSearchParams();
        search.set('ns', ns);
        search.set('search', term);
        search.set('search_for_classes', classes.toString());
        console.log('sending: ' + search.get('ns')  + ' - ' + search.get('search') + ' - ' + search.get('search_for_classes'));
        this.http.get(EndpointSettings.getSearchEndpoint(), { search: search })
            .map(response => response.json()).subscribe(

             data => {

                console.log("searchResults " +JSON.stringify(data));
                this.searchResults$ = Observable.of(data);


            }, error => console.log('Could not query services'));

    }

    public modifyHTLElement(htlElement: HotelElementModel){
        for (let i = 0; i < this.htlFields.length; i++){
            if (htlElement.propertyURI == this.htlFields[i].propertyURI){
                this.htlFields[i] = htlElement;
            }
        }
    }
    public createHotel(htlLabel: string): string{
         this.htlModel = new HotelModel();
         this.htlModel.label = htlLabel;
         this.htlModel.properties = this.htlFields;

        let result: string = '';
        this.http.post(EndpointSettings.getAddHotelEndpoint(), JSON.stringify(this.htlModel))
            .map(response => response.json()).subscribe(
            data => {
                result = 'OK';

            }, error =>
            result = 'ERROR'
        );

        return result;
    }

}
