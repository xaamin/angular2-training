import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component'
import { RegistrationComponent } from './registration/registration.component'

import { PartnersRouting } from './partners.routing'
import { PartnersService } from '../../services/partners.service'

@NgModule({
    declarations: [
        ListComponent,
        RegistrationComponent
    ],
    imports: [
        FormsModule,
        HttpModule,
        CommonModule,
        PartnersRouting
    ],
    providers: [
        PartnersService
    ]
})
export class PartnersModule { }
