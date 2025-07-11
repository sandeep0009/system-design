// LSP ensures that derived classes can be used interchangeably with their base classes without altering program behaviour



interface IBird{
    name:string;
    eat():void;
}

export interface IFlyble{
    fly():void;
}



export abstract class Bird implements IBird{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    eat():void{
        console.log(`${this.name} is eating`);
    }
}


export class Sparrow extends Bird implements IFlyble{
  constructor(name: string) {
    super(name);
  }

  fly(): void {
    console.log(`${this.name} is flying high!`);
  }
}



export class Penguin extends Bird {
  constructor(name: string) {
    super(name);
  }
  swim(): void {
    console.log(`${this.name} is swimming!`);
  }
}