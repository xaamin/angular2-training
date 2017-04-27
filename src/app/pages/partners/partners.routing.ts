import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component'
import { RegistrationComponent } from './registration/registration.component'

const appRoutes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PartnersRouting {

}