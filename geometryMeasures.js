function geometryMeasures(){
    let length =10;
    let breadth =5;
    let area = length * breadth;
    let perimeter = (length *2) + (breadth *2);
    return {
        area: area,
        perimeter: perimeter
    };
}

let result = geometryMeasures();

console.log('Area of the rectangle is '+result.area +' and perimeter of rectangle is '+ result.perimeter);