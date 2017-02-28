import { Http, Response, Headers }  from '@angular/http';
import { Injectable }               from '@angular/core';
import { Observable }               from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Setting }                  from './setting.model';

@Injectable()
export class SettingService {

    //private apiUrl = 'api/settings.json';
    private apiUrl = 'http://localhost/earnings-tracker-core-apis/api/settings';  // URL to web API
    
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getSetting(id: number) : Observable<Setting> {
        const url = (this.apiUrl === 'api/settings.json') ? this.apiUrl : `${this.apiUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateSetting(item: Setting) : Observable<any> {
        // This api call is designed to work with the database at the back-end
        const url = `${this.apiUrl}/${item.id}`;
        return this.http.put(url, JSON.stringify(item), {headers: this.headers})
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