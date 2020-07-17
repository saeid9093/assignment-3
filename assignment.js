//feetToMile
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var totalMile = feetToMile(10000);
console.log(totalMile);


//woodCalculator
function woodCalculator(chair, table, bed){
    var woodQuantityForChair = chair*1; //1 Chair needs 1 qubic meter wood
    var woodQuantityForTable = table*3; //1 Table needs 3 qubic meter wood
    var woodQuantityForBed = bed*5;   //1 Bed needs 5 qubic meter wood
    var totalWoodNeeded = woodQuantityForChair+woodQuantityForTable+woodQuantityForBed;
    return totalWoodNeeded;
}
var totalWoodQuantity = woodCalculator(1, 1, 1);
console.log(totalWoodQuantity);


//brickCalculator
function brickCalculator(building){
    var brickQuantityForFirstTenFloor = 10*15*1000; //1000 Bricks per feet
    var brickQuantityForSecondTenFloor = 10*12*1000;  //1000 Bricks per feet
    var brickQuantityForRestOfTheFloor = 25*10*1000;  //1000 Bricks per feet
    var totalBrickNeeded = brickQuantityForFirstTenFloor+brickQuantityForSecondTenFloor+brickQuantityForRestOfTheFloor;
    return totalBrickNeeded;
}
var totalBrickQuantity = brickCalculator(1);
console.log(totalBrickQuantity);


//tinyFriend


//finding smallest name from array
//var arrayNames = ['asad', 'sohel', 'pia', 'raqibul', 'hasan'];

function smallestNames (names){
    var smallestNames = names[0];
    for(i=0; i<names.length; i++){
        
        var currentNames = names[i];
        if (currentNames.length<smallestNames.length){
            smallestNames=currentNames;
        }
    }return smallestNames;
}
var smallestNamesDecleared = smallestNames(['asad', 'sohel', 'pia', 'raqibul', 'hasan']);
console.log(smallestNamesDecleared);