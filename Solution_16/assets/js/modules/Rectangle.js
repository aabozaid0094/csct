import Polygon from "./Polygon.js";
export default class Rectangle extends Polygon {
    #length;
    #width;
    constructor(length, width){
        super(length*width)
        this.#length = length;
        this.#width = width;
    }
    get Length(){
        return this.#length;
    }
    get Width(){
        return this.#width;
    }
}