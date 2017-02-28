import { NgModule }                 from '@angular/core';
import { ReactiveFormsModule }      from '@angular/forms';

import { ModalModule }              from 'angular2-modal';
import { BootstrapModalModule }     from 'angular2-modal/plugins/bootstrap';


/* Settings Feature Module */
import { SettingsComponent }         from './settings.component';
import { SettingService }            from './setting.service';
import { SettingsResolver }          from './settings-resolver.service';

/* Routing Module */
import { SettingsRoutingModule }     from './settings-routing.module';

@NgModule({
    imports:      [ SettingsRoutingModule, 
                    ReactiveFormsModule, 
                    ModalModule.forRoot(),
                    BootstrapModalModule 
                  ],
    declarations: [ SettingsComponent ],
    providers:    [ SettingService, SettingsResolver ]
})

export class SettingsModule {}