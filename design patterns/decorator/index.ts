

//he Decorator Pattern is used when we want to add new behavior or responsibilities to objects without modifying their existing code.
interface ICoffee{
    cost():number;
    description():string;
}

class SimpleCoffee implements ICoffee{
    cost():number{
        return 50;
    }

    description(): string {
        return "Plain coffee";
    }

}

abstract class CoffeeDecorator implements ICoffee{
    protected coffee:ICoffee;

    
    constructor(coffee: ICoffee) {
        this.coffee = coffee;
    }

    abstract cost(): number;
    abstract description(): string;
}


class MilkDecorator extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 10;
    }

    description(): string {
        return this.coffee.description() + ", Milk";
    }
}

class SugarDecorator extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 5;
    }

    description(): string {
        return this.coffee.description() + ", Sugar";
    }
}

class WhippedCreamDecorator extends CoffeeDecorator {
    cost(): number {
        return this.coffee.cost() + 20;
    }

    description(): string {
        return this.coffee.description() + ", Whipped Cream";
    }
}
