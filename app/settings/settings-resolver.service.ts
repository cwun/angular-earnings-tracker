import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable }                      from '@angular/core';
import { Observable }                      from 'rxjs/Observable';

import { SettingService }                from './setting.service';

@Injectable()
export class SettingsResolver implements Resolve<any> {
    constructor(private settingService: SettingService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        let id = route.params['id'];
        return this.settingService.getSetting(id);
    }
}