import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class CustomerService {
    constructor(private service:HttpService) { }
    getAll(){
        return this.service.get('customers').then(
            res => {
                return res;
            },
            err => {
                console.log('Error => ' + err);
                return;
            }
        ).catch(ex => {
            console.log('Exeption => ' + ex);
        })
    }
    getPaging(url:string, data){
        return this.service.post(url, data);
    }
    insert(data){
        return this.service.post('customers', data);
    }
    update(data){
        return this.service.put('customers', data);
    }
    delete(id){
        return this.service.delete('customers/' + id);
    }
}