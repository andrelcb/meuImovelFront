import {NgModule} from '@angular/core';

import {RealStateRoutingModule} from './real-state-routing.module';
import {ListarComponent} from './listar/listar.component';
import {SharedModule} from "../../shared/shared.module";
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
    declarations: [ListarComponent, CadastroComponent],
    imports: [
        SharedModule,
        RealStateRoutingModule
    ]
})
export class RealStateModule {
}
