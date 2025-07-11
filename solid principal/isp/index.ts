

// interface segregation principal


export interface IPrint{
    print():void;

}

export interface IScan{
    scan():void;

}

export interface IFax{
    fax():void;
}

class PrintHelper {
  print(): void {
    console.log('Printing from helper...');
  }
}

export class AllMachine implements IPrint, IScan, IFax {
  private printer = new PrintHelper();

  print(): void {
    this.printer.print();
  }

  scan(): void {
    console.log('Scanning...');
  }

  fax(): void {
    console.log('Faxing...');
  }
}
