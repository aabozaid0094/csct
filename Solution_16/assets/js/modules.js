import Rectangle from "./modules/Rectangle.js";
import Square from "./modules/Square.js";
import Circle from "./modules/Circle.js";
import Triangle from "./modules/Triangle.js";
'use strict';

//#region Areas
let areas_handle = () => {
    console.log("Rectangle(3,4)", new Rectangle(3,4).toString());
    console.log("Square(3)", new Square(3).toString());
    console.log("Circle(3)", new Circle(3).toString());
    console.log("Triangle(3,4)", new Triangle(3,4).toString());
};
if(document.getElementById('areas_button')) areas_button.addEventListener("click", areas_handle);
//#endregion