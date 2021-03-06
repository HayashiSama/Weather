import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

	cities = {
		"sanjose": 5392171,
		"seattle": 5809844,
		"burbank": 5331836,
		"dallas": 4190598,
		"dc": 4229546,
		"chicago": 4887398,
	}

  constructor(private _http: HttpClient) { }
	getCity(city){

	    return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=' + this.cities[city] + "&APPID=25f4b82f08ac4256695cf4a33068c8bd");  
	 }
}
