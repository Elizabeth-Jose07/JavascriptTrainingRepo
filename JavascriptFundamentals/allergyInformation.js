function allergyInformation(){
    let glutenFree = '1';
    let vegan = true;
    let nonAllergen = 0;

    let isGlutenFreeAndVegan = Boolean(glutenFree) && vegan;
    let isGlutenFreeOrVegan = Boolean(glutenFree) || vegan;
    let isNonAllergen = Boolean(nonAllergen);

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