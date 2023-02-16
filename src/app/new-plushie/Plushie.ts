import { throwError } from "rxjs";

export default class Plushie{
    private name: string = '';
    private size: number = 0;

    constructor(name: string, size: number){
        if(name == '' || size <= 0){
            throw new Error('Invalid input');
        }
        this.name = name;
        this.size = size;
    }

    toString(){
        return `${this.name} (${this.size} cm)`;
    }
}