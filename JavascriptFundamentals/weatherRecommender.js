function weatherRecommender(){
    let isSunny = true;
    let isRaining = false;
    let isCold = false;

    let isOutdoorFriendly = isSunny && !(isCold && isRaining);
    return isOutdoorFriendly;
}

console.log(weatherRecommender());