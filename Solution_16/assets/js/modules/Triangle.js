import Polygon from "./Polygon.js";
export default class Triangle extends Polygon {
    #base;
    #height;
    constructor(base, height){
        super(.5*base*height)
        this.#base = base;
        this.#height = height;
    }
    get Base(){
        return this.#base;
    }
    get Height(){
        return this.#height;
    }
}