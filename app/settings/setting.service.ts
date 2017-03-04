import { Http, Response, Headers }  from '@angular/http';
import { Injectable }               from '@angular/core';

import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Income }                   from './income.model';

@Injectable()
export class SettingService {
    
    // URL to Your Web API
    private apiUrl = 'http://localhost/earnings-tracker-core-apis/api/settings';  
    
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getIncome(id: number) : Observable<Income> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateIncome(item: Income) : Observable<any> {
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