import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ApiService} from "./services/api.service";
import {LocalStorageService} from "./services/local-storage.service";
import {JwtTokenService} from "./services/jwt-token.service";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [
        ApiService,
        LocalStorageService,
        JwtTokenService,
        AuthService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
