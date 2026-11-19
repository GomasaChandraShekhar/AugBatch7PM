import { Employee } from './09EmployeeInterface';

export class NewEmployee implements Employee {
    name: string;
    id: number;
    address: string;

    constructor(name: string, id: number, address: string) {
        this.name = name;
        this.id = id;
        this.address = address;
    }

    display(): void {
        console.log(`Employee details are :: 
            ${this.name} 
            ${this.id} 
            ${this.address}`);
    }

    help(): void {
        console.log("I am help function");
    }

    hello(): string {
        return "Hello Wellcome";
    }

}








