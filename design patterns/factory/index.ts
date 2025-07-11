

// Factory pattern creational design pattern that provides an interface for creating objects, but lets subclasses decide which class to instantiate


export interface IShape{
    draw():void;
}

export class Circle implements IShape{
    draw(): void {
        console.log('circle draw');
    }
}

export class Square implements IShape{
    draw(): void {
        console.log('square draw');
    }
}

export class Triangle implements IShape{
    draw(): void {
        console.log('draw triangle');
    }
}

export class ShapeFactory{
    static getShapeInstance(shape:string){
        switch(shape.toLowerCase()){
            case "circle":
                return new Circle();
                break;
            case "triangle":
                return new Triangle();
                break;
            case "square":
                return new Square();
                break;
            default:
                throw new Error("unknow shape typee");

        }

    }
}