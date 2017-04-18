import { Component } from '@angular/core';
import { FriendService } from './friend.service';

@Component({
    selector: 'home-root',
    templateUrl: 'home.component.html'
})
export class HomeComponent {
    title = 'Home Component';
    userid: number = 0;
    name: string
    friends = [];
    viewCallback: Function;
    editCallback: Function;
    deleteCallback: Function;
    saveCallback:Function;
    state = 1;
    index = -1;

    constructor(private service:FriendService){}

    ngOnInit() {
        // this.friends = this.service.getFriends();
        this.service.getFriends().then(
            res => {
                this.friends = res;
            },
            err => {
                console.log("Error -> " + err);
            }
        ).catch(ex=>{
            console.log("Exeption ->" + ex);
        })
        // this.user = new User();
        // this.listUser.push(new User(1, 'Richa'));
        // this.listUser.push(new User(2, 'Ferry'));
        // this.listUser.push(new User(3, 'Setyawan')); 
        this.viewCallback = this.view.bind(this);
        this.editCallback = this.edit.bind(this);
        this.deleteCallback = this.delete.bind(this);
        this.saveCallback = this.save.bind(this);
    }

    view(f) {
        this.state = 1;
        this.userid = f.userid;
        this.name = f.name;
    }

    delete(f) {
        if (confirm('Anda Yakin?')) {
            let index = this.friends.indexOf(f);
            if (index > -1) {
                this.friends.splice(index, 1);
            }
        }
    }

    add() {
        // this.user = new User();
        this.state = 0;
        this.userid = 0;
        this.name = "";
    }

    save() {
        if (this.state === 0) {
            let id = 1;
            let max = this.friends.length;
            if (max > 0) {
                id = this.friends[max - 1].userid + 1;
                this.friends.push({ userid: id, name: this.name });
            }
        } else if (this.state === 2) {
            this.friends.splice(this.index, 1, { userid: this.userid, name: this.name });
        } else {
            return;
        }
        this.state = 1;
        this.userid = 0;
        this.name = "";
    }

    edit(f) {
        this.state = 2;
        this.index = this.friends.indexOf(f);
        this.userid = f.userid;
        this.name = f.name;
    }
}