interface UserNameAndJob {
    userName:string;
    userJob:string;
}

export class UserInfo {
private userName:string;
private userJob:string;

    constructor({userName,userJob}:UserNameAndJob){
        this.userName = userName;
        this.userJob = userJob;
    }

   public getUserInfo():void{

    }

    public setUserInfo():void{

    }
}