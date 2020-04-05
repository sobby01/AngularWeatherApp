import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { UrlService } from './url-service'
import { $ } from 'protractor';

@Injectable({
  providedIn : 'root'
})

export class WeatherService{
    private _headers = new HttpHeaders().set('Content-Type', 'application/json' );

    constructor(  public http: HttpClient, public urlService: UrlService ){
    }

    public getData(city : string){
        return this.http.get(this.createRoute(this.urlService.baseUrl ,city,this.urlService.apiKey));
    }

    public createRoute(baseurl: string, city: string, appkey: string){
            return `${baseurl}/?q=${city}&AppId=${appkey}`;
    }

private generateHeaders(){
    const headers = this._headers.set('Access-Control-Allow-Origin' , '*')
    return headers;
}

}