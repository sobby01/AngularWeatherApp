import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'


@Injectable({
    providedIn : 'root'
  })

export class UrlService{

    public baseUrl : string = environment.urlAddress;
    public apiKey : string = environment.apiKey;
    constructor(){}
}