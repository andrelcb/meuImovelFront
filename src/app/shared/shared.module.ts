import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {TemplateAdminComponent} from './components/template-admin/template-admin.component';

@NgModule({
    declarations: [
        TemplateAdminComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        CommonModule,
        RouterModule,
        TemplateAdminComponent,
    ]
})
export class SharedModule {
}
