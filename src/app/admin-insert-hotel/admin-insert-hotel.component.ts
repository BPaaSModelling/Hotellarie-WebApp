import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams, Jsonp} from '@angular/http';
import {EndpointSettings} from '../_settings/endpoint.settings';
import {SearchResultModel} from '../_models/searchresult.model';
import {HotelModel} from '../_models/hotel.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HotelElementModel} from '../_models/hotel-element.model';
import {InsertHTLService} from '../admin-insert-hotel.service';

@Component({
  selector: 'app-admin-insert-hotel',
  templateUrl: './admin-insert-hotel.component.html',
  styleUrls: ['./admin-insert-hotel.component.css']
})

export class AdminInsertHotelComponent implements OnInit {

  public hotel: HotelModel= new HotelModel();
  private htlLabel: string = "";
  private status: string;
  private specific_domain = "General";
constructor(
   private insertService: InsertHTLService
){
  this.insertService.queryHTLModel();
  //insertService.defineDomains(insertService.hotel);
}
  ngOnInit() {

  }



  public createHTL(): void{
     status = this.insertService.createHotel(this.htlLabel);
     if (status = "OK"){
       alert("Hotel added successfully!");
       location.reload();
     }
}
}
