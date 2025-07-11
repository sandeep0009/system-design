

export class User{
   public name:string;
   public email:string;
   private isLogged:boolean;
   constructor(fname:string,email:string){
    this.name=fname;
    this.email=email;
    this.isLogged=false;
   }

   public login():void{
        if(this.name && this.email){
            this.isLogged=true;
            console.log(`user logged name :${this.name}`);

        }
        else{
            console.log(`login failed`);
        }
   }

   public logout():void{
        if(this.name && this.email){
            this.isLogged=false;
            console.log('logged out successfuly');
        }
   }
}