import { Calculette } from "./calculette/calculette.component";

class App {
    private calculette: Calculette;

    constructor(calculette: Calculette) {
        this.calculette = calculette;
    }

    ask(op: string[]): number {

        let res: number = 0;

        switch (op[1]) {
            case "+":
                res = this.calculette.plus(+op[0], +op[2]);
                break;
            case "-":
                res = this.calculette.minus(+op[0], +op[2]);
                break;
            case "*":
                res = this.calculette.product(+op[0], +op[2]);
                break;
            case "/":
                res = this.calculette.division(+op[0], +op[2]);
                break;
        
            default:
                console.log("Bad parameters");
                break;
        }

        return res;

    }
}

const cal: Calculette = new Calculette();
const app: App = new App(cal);
console.log(app.ask(process.argv.slice(2)));
