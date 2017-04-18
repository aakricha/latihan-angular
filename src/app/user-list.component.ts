import { Component, OnInit, Input } from '@angular/core';
import { User } from "./user.model";

@Component({
  selector: 'user-list',
  template: `
<table border="1">
  <tr>
    <td>Action</td>
    <td>User ID</td>
    <td>Username</td>
  </tr>
  <tr *ngFor="let u of listUser">
    <td>
      <a href="javascript:" (click)="view(u)">View</a>
      <a href="javascript:" (click)="edit(u)">Edit</a>
      <a href="javascript:" (click)="delete(u)">Delete</a>
    </td>
    <td>{{u.userid}}</td>
    <td>{{u.username}}</td>
  </tr>
</table>
    `
})
export class UserListComponent {
  @Input() listUser: User[];
  @Input() view: Function;
  @Input() edit: Function;
  @Input() delete: Function;
}