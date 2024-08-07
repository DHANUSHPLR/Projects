import { Injectable } from '@angular/core';
import { Bike } from './model/Bike';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  url : string;
  bikearr: Bike[]=[];
  bike : Bike;
  constructor(private http:HttpClient) {
    this.url="http://localhost:3004/bikes"
    this.bike=new Bike();
    this.bikearr=[];
   }

   insertbike(bike : Bike){
    alert(bike.name);
    this.http.post<Bike>(this.url,bike).subscribe();
    return "Bike Detail Added";
  }
}
