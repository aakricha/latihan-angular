import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nav-component',
    template: `
    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span> 
            </button>
            <a class="navbar-brand" routerLink="home">Angular 2</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
                <li routerLinkActive="active"><a routerLink="home">Home</a></li>
                <li routerLinkActive="active"><a routerLink="customer">Customer</a></li>
                <li routerLinkActive="active"><a routerLink="contact">Contact</a></li>
                <li routerLinkActive="active"><a routerLink="about">About</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
            </div>
        </div>
    </nav>
    `
})

export class NavComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}