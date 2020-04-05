import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather-service'
import { WeatherDetails } from '../models/weather-details'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weatherForecast : any = <any>{};
  weatherModel = new WeatherDetails();
  cities = Array<string>();
  constructor(private weatherService: WeatherService) {

   }

  ngOnInit() {
    
  }

  public addInput(event: any){
    
    let name: string = event.target.value;
    this.cities = name.split(',');
    if(this.cities.length > 0 && this.cities[0] != undefined && this.cities[0] != '' ){
      this.fetchWeatherData(this.cities[0]);
    }
    else{
      this.weatherForecast = <any>{};
    }
  }


  public fetchWeatherData(city : string){

    console.log(city);
    this.weatherService.getData(city).subscribe(
      
      data => {
        this.weatherForecast = data;
      }
    )
  }

  public isFound(){
  return Object.keys(this.weatherForecast).length > 0;
  }

}
