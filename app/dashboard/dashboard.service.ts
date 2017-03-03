import { Http, Response } from '@angular/http';
import { Injectable }     from '@angular/core';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

    private url = 'http://earnings-tracker-net-core-apis.azurewebsites.net/api/dashboards'; // URL to DEMO API
    //private url = 'http://localhost/earnings-tracker-core-apis/api/dashboards';  // URL to Your Web API

    constructor(private http: Http) { }

    getSetting() : Observable<any> {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let data = res.json();
        return data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}