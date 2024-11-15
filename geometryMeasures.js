function geometryMeasures(){
    let length =10;
    let breadth =5;
    let area = length * breadth;
    let perimeter = (length *2) + (breadth *2);
    return area, perimeter;
}

console.log('Area of the rectangle is '+ geometryMeasures() +' and perimeter of rectangle is '+ geometryMeasures());