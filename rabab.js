/* Q 13:Your own array:Think of your favourite mode of transpotation,such as motorcycle or a car,and make list that several examples.
use your llst to print a  series of statements about these items such as"I would like to own a Honda Motorcycle."*/
var transpotationMode = ["TOYOTA COROLLA", "LAND CRUISER PRADO", "SUV"];
transpotationMode.forEach(function (Mode) {
    return console.log("I would  like to buy ".concat(Mode));
});
console.log("But ".concat(transpotationMode[1], " is my dream Car"));
