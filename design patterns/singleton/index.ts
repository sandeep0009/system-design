import mongoose from "mongoose";


// Singleton pattern ensures that only one instance of the class exists and provides a global point of access to it
export class MongoDbSingleton{

    private readonly dbUrl:string;
    private static instance:MongoDbSingleton;
    private isConnected:boolean=false;

    private constructor(dbUrl:string){
        this.dbUrl=dbUrl;
    }


    public static async getDbInstance(dbUrl:string):Promise<MongoDbSingleton>{
        if(!this.instance){
            this.instance=new MongoDbSingleton(dbUrl);
            await this.instance.connect();
        }
        return this.instance;
        
    }

    public async connect():Promise<void>{
        if (!this.isConnected) {
      await mongoose.connect(this.dbUrl);
      this.isConnected = true;
      console.log("MongoDB connected");
    }
    }
    public getMongooseInstance(): typeof mongoose {
    return mongoose;
  }

}




(async()=>{
    const dbUrl="mongodb://localhost:27017/mydb";
    const db = await MongoDbSingleton.getDbInstance(dbUrl);
  const mongooseInstance = db.getMongooseInstance();
})();