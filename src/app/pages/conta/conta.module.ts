import {NgModule} from '@angular/core';

import {ContaRoutingModule} from './conta-routing.module';
import {LoginComponent} from './login/login.component';
import {SharedModule} from "../../shared/shared.module";
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
    declarations: [LoginComponent, RegisterComponent, LogoutComponent],
    imports: [
        SharedModule,
        ContaRoutingModule
    ]
})
export class ContaModule {
}
