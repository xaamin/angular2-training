import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerListComponent } from './partners/partner-list.component';

@NgModule({
    declarations: [
        PartnerListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PartnerListComponent
    ]
})
export class ComponentsModule {

}