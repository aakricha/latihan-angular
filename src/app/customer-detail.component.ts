import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';

@Component({
    selector: 'customer-detail',
    templateUrl: 'customer-detail.component.html'
})

export class CustomerDetailComponent implements OnInit {
    constructor(private service:CustomerService) { }
    ngOnInit() { }
    @Input() id:string;
    @Input() customer:Customer;
    @Input() state:number;
    @Input() displayData:Function;

    save(){
        if (this.state == 0) {
            this.service.insert(this.customer).then(
                res => {
                    if (res.status) {
                        alert(res.message);
                        $('#'+this.id).modal('hide');
                        this.displayData();
                    }
                }
            )
        }else{
            this.service.update(this.customer).then(
                res => {
                    if (res.status) {
                        alert(res.message);
                        $('#'+this.id).modal('hide');
                        this.displayData();
                    }
                }
            )
        }
    }
}