import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule }       from '@angular/http';
import { FormsModule }      from '@angular/forms';

/* App Root */
import { AppComponent }     from './app.component';
import { NavbarComponent }  from './navbar/navbar.component';

/* Feature Modules */
import { DashboardModule }  from './dashboard/dashboard.module';
import { SettingsModule }   from './settings/settings.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  HttpModule,
                  DashboardModule,
                  SettingsModule,
                  AppRoutingModule
                ],
  declarations: [ AppComponent, NavbarComponent ],
  bootstrap:    [ AppComponent]
})

export class AppModule { }