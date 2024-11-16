function weatherRecommender(){
    let isSunny = true;
    let isRaining = false;
    let isCold = false;

    let isOutDoorFriendly = isSunny && !(isCold || isRaining);
    return isOutDoorFriendly;
}

console.log(weatherRecommender());