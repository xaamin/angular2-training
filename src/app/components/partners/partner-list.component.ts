import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'partner-list',
    templateUrl: './partner-list.component.html'
})
export class PartnerListComponent {

    @Input('partners') public partners: any[];
    @Output('edit')  public edit = new EventEmitter;

    public fireEdit(partner: any): void {
        this.edit.emit(partner);
        console.log('Firing edit event', partner)
    }

}