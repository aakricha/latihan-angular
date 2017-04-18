import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer.model';

@Component({
    selector: 'customer-component',
    templateUrl: 'customer.component.html',
    styleUrls: ['./customer.style.css'],
    styles: [
        `
        th{
            cursor:pointer
        }
        `
    ]
})

export class CustomerComponent implements OnInit {
    constructor(private service: CustomerService) { }
    customer: Customer;
    customers = [];
    option = {
        page: 1,
        pageSize: 10,
        criteria: [],
        order: { column: "CustomerID", direction: "ASC" }
    }
    total: number = 0;
    page: number = 0;
    pageCount: number = 0;
    state = 1;
    fields = [
        "CustomerID",
        "CompanyName",
        "ContactName",
        "ContactTitle",
        "Address",
        "City",
        "Country"
    ];
    listCriteria = [
        { "value": "CustomerID", "text": "Customer ID" },
        { "value": "CompanyName", "text": "Company Name" },
        { "value": "ContactName", "text": "Contact Name" },
        { "value": "ContactTitle", "text": "Contact Title" },
        { "value": "Address", "text": "Address" },
        { "value": "City", "text": "City" },
        { "value": "Country", "text": "Country" },
    ];
    displayDataCallback: Function;
    ngOnInit() {
        this.customer = new Customer();
        this.displayDataCallback = this.displayData.bind(this);
    }
    ngAfterViewInit() {
        this.displayData();
    }
    displayData() {
        this.service.getPaging('customers/paging', this.option).then(
            res => {
                this.customers = res.rows;
                this.total = res.rowCount;
                this.pageCount = res.pageCount;
            }
        );
    }
    prev() {
        if (this.option.page > 1) {
            this.option.page--;
            this.displayData();
        }
    }
    next() {
        if (this.option.page < 10) {
            this.option.page++;
            this.displayData();
        }
    }
    changePageSize() {
        this.displayData();
    }
    inputChange() {
        this.displayData();
    }
    direction: boolean = true;
    sortData(i) {
        let direx = (this.direction) ? "ASC" : "DESC";
        this.option.order = { "column": i, "direction": direx };
        this.displayData();
        this.direction = (this.direction) ? false : true;
    }
    criteria: string;
    value: string;
    search() {
        if (this.criteria !== '' && this.value !== '') {
            this.option.criteria.push({ criteria: this.criteria, value: this.value });
            this.displayData();
        }
    }
    remove(crt) {
        let index = this.option.criteria.indexOf(crt);
        this.option.criteria.splice(index, 1);
        this.displayData();
    }
    addNew() {
        this.state = 0;
        this.customer = new Customer();
        $('#modal-detail').modal();
    }
    view(c) {
        this.state = 1;
        this.customer = c;
        $('#modal-detail').modal();
    }
    edit(c) {
        this.state = 2;
        this.customer = JSON.parse(JSON.stringify(c));
        $('#modal-detail').modal();
    }
    delete(c) {
        if (confirm('Yakin Hapus ' + c.ContactName + ' on ' + c.CustomerID + ' ?')) {
            let index = this.customers.indexOf(c);
            if (index > -1) {
                this.service.delete(c.CustomerID).then(
                    res => {
                        if (res.status) {
                            alert(res.message);
                            this.displayData();
                        }
                    }
                )
            }
        }
    }
    save() {

    }
    //  ngAfterViewInit(){
    //      this.service.getAll().then(
    //         res => {
    //             this.customer = res;
    //         }
    //     )
    //  }
}