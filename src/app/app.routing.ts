import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationComponent } from './pages/organization/organization.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const appRoutes: Routes = [
    {
        path: 'organization',
        component: OrganizationComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'partners',
        loadChildren: './components/partners/partners.module#PartnersModule',
    },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: '**',
        component:  NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting {

}