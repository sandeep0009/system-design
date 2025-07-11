


//Prototype is a creational pattern that allows you to create new objects by copying an existing object



export class Document{
    public title:string;
    public author:string;
    public content:string;

   constructor(title: string, content: string, author: string) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    cloneShallow(): Document {
        return Object.create(this);
    }

    cloneDeep(): Document {
        return JSON.parse(JSON.stringify(this));
    }
}