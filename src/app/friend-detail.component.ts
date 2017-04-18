import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'friend-detail',
    templateUrl: 'friend-detail.component.html'
})

export class FriendDetailComponent implements OnInit {
    constructor() { }
    @Input() state = 1;
    @Input() userid = 0;
    @Input() name;
    @Input() save:Function;
    @Output() nameChange = new EventEmitter<any>();
    ngOnInit() { }
    nameChanged(e){
        this.nameChange.emit(e);
    }
}