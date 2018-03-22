import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RESTConnectorService } from './../RestService/index';
import { Card } from './../../entities/index';

@Injectable()
export class VideoService {
    contentType: string = "application/json";
    public constructor(private restConnector: RESTConnectorService) {
    }
    public GetSubCard(SubId: any): Observable<any> {
        let obj = new Object();
        obj['folderId'] = SubId;
        obj['kidId'] = localStorage.getItem('kidId');
        var id = SubId;
        let url = "/cards/folder/" + id;
        return this.restConnector.httpGetWithParameter(url, obj, this.contentType);
    }
    public getVideo(videoID: any): Observable<any> {
        let url = "/cards/video/" + videoID;
        return this.restConnector.httpGetWeb(url, this.contentType);
    }
    public startVideo(videoId: any): Observable<any> {
        let kidId = localStorage.getItem('kidId');
        let object = new Object();
        object['videoId'] = videoId;
        object['kidId'] = kidId;
        console.log(object);
        let url = "/cards/video/" + videoId + "/started";
        return this.restConnector.httpGetWithParameter(url, object, this.contentType);
    }
    public EndVideo(values: any): Observable<any> {
        let url = "/cards/video/" + values.videoId + "/end";
        return this.restConnector.httpPostWeb(values, url, this.contentType);
    }
}