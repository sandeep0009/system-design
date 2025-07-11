

//SRP stands for single responsibility principle it is made for only one specific purpose .
// should do one and only one task;


type ReportProp={
    id:string,
    subject:Record<string,number>[],
    name:string,
    _class:string

}

export const globalData:ReportProp[]=[]

export class ReportGenerator{
   constructor(){
    console.log('class intitaed');
   }
    public generateRport(id:string,subject:Record<string,number>[],name:string,_class:string):void{
        const reportGen={
            id,
            subject,
            name,
            _class
        }
        globalData.push(reportGen);
        console.log('generated successfully report');
    }

}

export class ReportPrinter{

    constructor(){
        console.log('report Printer class inittiaed');
    }

    public printReports(){
        for(let i=0;i<globalData.length;i++){
            console.log('all reports are here:',globalData[i]);
        }
    }

}