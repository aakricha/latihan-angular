import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact-component',
    templateUrl: 'contact.component.html'
})

export class ContactComponent implements OnInit {
    constructor() { }
    title = "Contact Component";
    ngOnInit() { }
}