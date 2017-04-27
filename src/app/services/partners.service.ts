import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class PartnersService {

    private partners: any[];

    public constructor(private http: Http) {
        this.partners = []

        this.partners.push({
            id: 1,
            uuid: 'uuid',
            name: 'Ben',
            tax_id: 'MAMB',
            status: 'REVOKED'
        })

        this.partners.push({
            id: 2,
            uuid: 'uuid',
            name: 'Ben',
            tax_id: 'MAMB',
            status: 'ACTIVE'
        })

        this.partners.push({
            id: 3,
            uuid: 'uuid',
            name: 'Ben',
            tax_id: 'MAMB',
            status: 'REVOKED'
        })
    }

    public paginate(): Observable<any[]> {
        let observable = new BehaviorSubject([])

        observable.next(this.partners);

        return observable;
    }

    public register(partner: any): any {
        let observable = new BehaviorSubject(null)

        const _partner = JSON.parse(JSON.stringify(partner))

        _partner.id = this.partners.length + 1;

        const response = {
            message: 'Partner registrado',
            data: _partner
        }

        this.partners.push(_partner);

        observable.next(response);

        return observable;
    }

    /*public paginate(): Observable<any[]> {
        return this.http
                .get('https://jsonplaceholder.typicode.com/posts')
                .map((response) => response.json())
    }*/

}