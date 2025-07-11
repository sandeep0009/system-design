

//Adapter pattern is a structural design pattern that allows incompatible interfaces to work together



export interface INewPrinter{
    print():void;
}

export class Oldprinter{

    public oldPrint(){
        console.log('old printer working');
    }

}

export class PrinterAdapter implements INewPrinter{
    private readonly oldPrinter:Oldprinter;

    constructor(oldPrinter:Oldprinter){
        this.oldPrinter=oldPrinter;
    }

    print(): void {
        return this.oldPrinter.oldPrint();
    }

}



