import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListarComponent} from "./listar/listar.component";
import {FormComponent} from "./form/form.component";


const routes: Routes = [
    {path: '', component: ListarComponent},
    {path: 'form', component: FormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RealStateRoutingModule {
}
