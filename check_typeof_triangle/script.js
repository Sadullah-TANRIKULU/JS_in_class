// Check if a triangle is equilateral(eşkenar), scalene(çeşitkenar), or isosceles(ikizkenar)
// A triangle is valid if sum of its two sides is greater than the third side.



let findTypeTriangle = function(x, y, z) {
    if (x + y < z || y + z < x || x + z < y) {
        console.log(`this is %cNOT a triangle`, `background-color: red; color: white;`);
    } else if (x == y && y == z) {
        console.log(`this is a equilateral triangle`);
    } else if (x == y || x == z || y == z){
        console.log(`this is a isosceles triangle`);
    } else {
        console.log(`this is a scalene triangle`);
    }
}

findTypeTriangle(8, 8, 8);



