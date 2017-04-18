export /**
 * User
 */
class User {
    userid:number;
    username:string;
    constructor(userid?:number, username?:string) {
        this.userid = userid;
        this.username = username;
    }
}