import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'friend-list',
    templateUrl: './friend-list.component.html'
})

export class FriendListComponent implements OnInit{
    constructor() {}
    @Input() friends = [];
    @Input() view:Function;
    @Input() edit:Function;
    @Input() delete:Function;
    ngOnInit(){}
}