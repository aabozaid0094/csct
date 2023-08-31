export default class Polygon {
    #area;
    constructor(area) {
        if(this.constructor == Polygon) throw new Error("Abstract Class!");
        this.#area = area;
    }
    get Area(){
        return this.#area;
    }
    toString(){
        return `Area is: ${this.#area}`;
    }
}