import type { FileSystemItem } from "./type";



export class File implements FileSystemItem{
    constructor(private name:string){}
    getName(){
        return this.name;
    }
    display(indent=''){
        console.log(`${indent}- File: ${this.getName()}`);
    }
}