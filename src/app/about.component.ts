import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'about-component',
    templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit {
    constructor() { }
    title = 'About Component';
    ngOnInit() { }
}