import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

    constructor(
  	private _httpService: HttpService) { }
  city: any;

  ngOnInit() {
  	let obs = this._httpService.getCity("chicago")
  	obs.subscribe(data => {
  		this.city = (data as any);
  		console.log(this.city)
  	})  	
  }

}
