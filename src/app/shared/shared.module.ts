import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {TemplateAdminComponent} from './components/template-admin/template-admin.component';
import { TemplateContaComponent } from './components/template-conta/template-conta.component';

@NgModule({
    declarations: [
        TemplateAdminComponent,
        TemplateContaComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        CommonModule,
        RouterModule,
        TemplateAdminComponent,
        TemplateContaComponent,
    ]
})
export class SharedModule {
}
