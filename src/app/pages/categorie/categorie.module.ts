import {NgModule} from '@angular/core';

import {CategorieRoutingModule} from './categorie-routing.module';
import {ListarComponent} from './listar/listar.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [ListarComponent],
    imports: [
        SharedModule,
        CategorieRoutingModule
    ]
})
export class CategorieModule {
}
