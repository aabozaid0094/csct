import Polygon from "./Polygon.js";
export default class Circle extends Polygon {
    #radius;
    constructor(radius){
        super(Math.PI*radius**2)
        this.#radius = radius;
    }
    get Radius(){
        return this.#radius;
    }
}