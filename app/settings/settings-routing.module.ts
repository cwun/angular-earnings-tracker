import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent }    from './settings.component';
import { SettingsResolver }     from './settings-resolver.service';

const routes: Routes = [
    {   path: 'settings/:id',  
        component: SettingsComponent,
        resolve: {
            settings: SettingsResolver
        } 
    }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class SettingsRoutingModule {}
