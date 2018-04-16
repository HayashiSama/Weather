import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

    constructor(
  	private _httpService: HttpService) { }
  city: any;

  ngOnInit() {
  	let obs = this._httpService.getCity("dc")
  	obs.subscribe(data => {
  		this.city = (data as any);
  		console.log(this.city)
  	})
  }

}
