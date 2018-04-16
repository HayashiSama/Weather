import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  constructor(
  	private _httpService: HttpService) { }
  city: any;
  ngOnInit() {
  	let obs = this._httpService.getCity("sanjose")
  	obs.subscribe(data => {
  		this.city = (data as any);
  		console.log(this.city)
  	})
  }

}
