import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RESTConnectorService } from './../RestService/index';
import { AddFav } from './../../entities/index';

@Injectable()
export class FavoriteService {
    contentType: string = "application/json";
    public constructor(private restConnector: RESTConnectorService) {
    }
    public addFavrouit(values: AddFav): Observable<any> {
        console.log(values);
        let url = "/kid/" + values.kidId + "/favorites/add";
        console.log(url);
        return this.restConnector.httpPostWeb(values, url);
    }
    public GetFavorite(kidId: any): Observable<any> {
        let url = "/kid/" + kidId + "/favorites/getList";
        return this.restConnector.httpGetWeb(url, this.contentType);
    }
    public RemoveFavorite(values: any): Observable<any> {
        var kidId = values.kidId;
        let url = "/kid/" + kidId + "/favorites/remove";
        return this.restConnector.httpPostWeb(values, url);
    }
    public SetLanguage(id: any): Observable<any> {
        let obj = new Object();
        obj['languageId'] = id;
        let url = "/language/set";
        return this.restConnector.httpPostWeb(obj, url);
    }
}