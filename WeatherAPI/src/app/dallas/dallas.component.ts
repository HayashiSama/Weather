import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

    constructor(
  	private _httpService: HttpService) { }
  city: any;

  ngOnInit() {
  	let obs = this._httpService.getCity("dallas")
  	obs.subscribe(data => {
  		this.city = (data as any);
  		console.log(this.city)
  	})  	
  }

}
