function allergyInformation(){
    let glutenFree = '1';
    let vegan = true;
    let nonAllergen = 0;

    let isGlutenFreeAndVegan = glutenFree && vegan;
    let isGlutenFreeOrVegan = glutenFree || vegan;
    let isNonAllergen = nonAllergen && 0;

    return { 
        isGlutenFreeAndVegan:isGlutenFreeAndVegan,
        isGlutenFreeOrVegan: isGlutenFreeOrVegan,
        isNonAllergen: isNonAllergen
    }

}

const result = allergyInformation();
console.log(result.isGlutenFreeAndVegan);
console.log(result.isGlutenFreeOrVegan);
console.log(result.isNonAllergen);