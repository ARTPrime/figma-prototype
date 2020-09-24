import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
    declarations: [AppComponent, LoginComponent, RegisterComponent, LogoComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
