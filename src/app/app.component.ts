import { Component } from '@angular/core';
import { User } from './user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Richa!';
  user: User;
  listUser: User[] = [];
  viewCallback:Function;
  editCallback:Function;
  deleteCallback:Function;
  state = 1;
  index = -1;

  ngOnInit(){
    this.user = new User();
    this.listUser.push(new User(1, 'Richa'));
    this.listUser.push(new User(2, 'Ferry'));
    this.listUser.push(new User(3, 'Setyawan')); 
    this.viewCallback = this.view.bind(this);
    this.editCallback = this.edit.bind(this);
    this.deleteCallback = this.delete.bind(this);
  }
  
  view(u) {
    this.state = 1;
    this.user = u;
  }

  delete(u) {
    if (confirm('Anda Yakin?')) {
      let index = this.listUser.indexOf(u);
      if (index > -1) {
        this.listUser.splice(index, 1);
      }
    }
  }

  add(){
    this.user = new User();
    this.state = 0;
  }

  save(){
    if (this.state === 0) {
      let id = 0;
      let max = this.listUser.length;
      if (max > 0) {
        id = this.listUser[max - 1].userid + 1;
      }else{
        id = 1;
      }
      this.listUser.push(new User(id, this.user.username));
    }else {
      this.listUser.splice(this.index, 1, this.user);
    }
    this.state = 1;
    this.user = new User();
  }

  edit(u){
    this.state = 2;
    let str = JSON.stringify(u);
    this.user = JSON.parse(str);
    this.index = this.listUser.indexOf(u);
  }
}
