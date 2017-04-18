import { Injectable } from '@angular/core';
import { FRIENDS } from './friend.data';
import { Friend } from './friend.model';

@Injectable()
export class FriendService {
    Friends = FRIENDS;
    constructor() { }

    getFriends():Promise<Friend[]>{
        return Promise.resolve(this.Friends);
    }
}