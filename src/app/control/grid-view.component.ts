import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'grid-view',
    templateUrl: 'grid-view.component.html',
    styleUrls: [
        'grid-view.component.css'
    ]
})

export class GridViewComponent implements OnInit {
    constructor() { }
    items = [];
    columns = [];
    options = {
        page: 1,
        pageSize: 10,
        criteria: [],
        order: []
    }
    display: Function;
    direction: boolean = false;
    listCriteria = [];
    criteria: any = '';
    value: string = '';
    data = {
        rows: [],
        rowCount: 0,
        pageCount: 0,
        pageSize: 10
    }
    ngOnInit() { }
    displayData() {
        this.display();
    }
    search() {

    }
    remove(crt) {

    }
    sort(c) {

    }
    prev() {

    }
    next() {

    }
}