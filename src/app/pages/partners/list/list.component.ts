import { Component, OnInit } from '@angular/core';
import { PartnersService } from '../../../services/partners.service';

@Component({
    selector: 'partners-list',
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

    public partners: any[];
    public partner: any;

    public constructor(private service: PartnersService) {
        this.partner = {}
    }


    private getPartnersPaginated() {
        this.service.paginate().subscribe((data) => {
            console.log('DATA', data)
            this.partners = <any>data
        }, (error) => {
            console.log('ERROR', error)
        }, () => {
            console.log('FINALLY')
        })
    }

    public ngOnInit() {
        console.log('Partners list on init fired')

        this.getPartnersPaginated();
    }

    public register(partner: any) {
        this.service.register(partner).subscribe((data) => {
            console.log('REGISTRATION', data)

            this.getPartnersPaginated();
        }, (error) => {
            console.log('REGISTRATION ERROR', error)
        }, () => {
            console.log('FINALLY')
        })
    }

    public edit(partner: any) {
        console.log('Listener for edit', partner)
    }

}