import { Component, Input } from '@angular/core';
import { User } from "./user.model";

@Component({
    selector: 'user-detail',
    template: `
<table>
  <tr>
    <td>User ID</td>
    <td><input type="text" id="userid" name="userid" [(ngModel)]="user.userid" [disabled]="true"></td>
  </tr>
  <tr>
    <td>Username</td>
    <td><input type="text" id="username" name="username" [(ngModel)]="user.username" [disabled]="state === 1"></td>
  </tr>
</table>
    `
})
export class UserDetailComponent {
    @Input() user:User[];
    @Input() state=1;
    constructor() {}
}