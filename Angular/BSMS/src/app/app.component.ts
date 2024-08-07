import { Component, model } from '@angular/core';
import { Bike } from './model/Bike';
import { BikeService } from './bike.service';

@Component({
  selector: 'app-system',
  templateUrl: './app.component.html',
  styleUrl:  './app.component.css'
})
export class AppComponent  {
    bike : Bike;
    result : string;
    bikearr:Bike[]=[];
    flag:boolean;

    constructor(private service : BikeService){

      this.bike = new Bike();
      this.result="";
      this.bikearr=[];
      this.flag=false;
    }
insertbike(data : any){
  this.bike.name=data.name;
  this.bike.license=data.license;
  this.bike.no=data.no;
  this.bike.b_name=data.b_name;

  this.result=this.service.insertbike(this.bike);
}
}
