import { ICalculette } from "./calculette.interface";

export class Calculette implements ICalculette {
    plus(a: number, b: number) {
        return a + b;
    }
    minus(a: number, b: number) {
        return a - b;
    }
    product(a: number, b: number) {
        return a * b;
    }
    division(a: number, b: number) {
        return a / b;
    }
}