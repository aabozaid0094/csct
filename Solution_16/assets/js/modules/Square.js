import Polygon from "./Polygon.js";
export default class Square extends Polygon {
    #length;
    constructor(length){
        super(length**2)
        this.#length = length;
    }
    get Length(){
        return this.#length;
    }
}