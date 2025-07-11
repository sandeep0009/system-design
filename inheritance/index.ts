

export class Vehicle{
    public modelName:string;
    public color:string;

    constructor(model:string,color:string){
        this.modelName=model;
        this.color=color;
    }

    public start():void{
        if(this.modelName && this.color){
            console.log('started');
        }
    }
    public stop():void{
        if(this.modelName){
            console.log('stop')
        }
    }
}

export class Cars extends Vehicle{
    public engineType:string;
    constructor(modelname:string,color:string,engineType:string){
        super(modelname,color);
        this.engineType=engineType;

    }
    public override start(): void {
    console.log(`${this.modelName} with ${this.engineType} engine is starting...`);
    super.start();
  }
    
}
