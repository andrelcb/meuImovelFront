import {NgModule} from '@angular/core';

import {RealStateRoutingModule} from './real-state-routing.module';
import {ListarComponent} from './listar/listar.component';
import {SharedModule} from "../../shared/shared.module";
import { FormComponent } from './form/form.component';


@NgModule({
    declarations: [ListarComponent, FormComponent],
    imports: [
        SharedModule,
        RealStateRoutingModule
    ]
})
export class RealStateModule {
}
