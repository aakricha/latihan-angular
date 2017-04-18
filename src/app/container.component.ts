import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-container',
    template:`
    <nav-component></nav-component>
    <router-outlet></router-outlet>
    `
})

export class ContainerComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}