import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { RESTConnectorService } from './../RestService/index';
import { Refresh, Card, User } from './../../entities/index';




@Injectable()
export class RefreshWebService {
    d = new Date();
    date: Date;
    contentType: string;
    public constructor(private restConnector: RESTConnectorService) {
        this.date = new Date(this.d.getUTCDay(), this.d.getUTCDate(), this.d.getUTCMonth(), this.d.getUTCFullYear(), this.d.getUTCHours(), this.d.getUTCMinutes(), this.d.getUTCSeconds());
    }
    public RefreshWeb(): Observable<Refresh> {
        let refreshweb = new Refresh();
        refreshweb.Date = this.date;
        let url = "/device/refreshWeb";

        return this.restConnector.httpPostWeb(refreshweb, url);
    }
    // public GetCard(): Observable<any> {
    //     this.contentType = 'education';
    //     let url = "/cards/getList";
    //     return this.restConnector.httpGetWeb(url, this.contentType);
    // }
    public GetCard(): Observable<any> {
        let obj = new Object();
        obj['kidId'] = localStorage.getItem('kidId');
        obj['contentType'] = localStorage.getItem('selectedContentType');
        obj['premiumActive'] = localStorage.getItem('premiumActive');
        obj['limit'] = localStorage.getItem('screenTimeLimit');
        this.contentType = "application/json";
        console.log(obj);
        let url = "/cards/getList";
        return this.restConnector.httpGetWithParameter(url, obj, this.contentType);
    }
    public updateKid(values: any): Observable<any> {
        let url = "/kid/[kidId]/update";
        return this.restConnector.httpPostWeb(values, url);
    }
}

