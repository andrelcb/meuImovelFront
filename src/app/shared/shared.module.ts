import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {TemplateAdminComponent} from './components/template-admin/template-admin.component';
import {TemplateContaComponent} from './components/template-conta/template-conta.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NotifierModule} from "angular-notifier";
import { ComponentsModule } from '../components/components.module';

@NgModule({
    declarations: [TemplateAdminComponent, TemplateContaComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        NotifierModule.withConfig({
            position: {
                horizontal: {position: 'right'},
                vertical: {position: 'top'}
            }
        })
    ],
    exports: [
        CommonModule,
        RouterModule,
        TemplateAdminComponent,
        TemplateContaComponent,
        FormsModule,
        ReactiveFormsModule,
        NotifierModule,
        ComponentsModule
    ]
})
export class SharedModule {
}
