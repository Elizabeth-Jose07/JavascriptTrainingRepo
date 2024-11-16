function variableScope(){
    var playerScore = 0;
    {
        let bonusScore = 50
        playerScore +=bonusScore;
    }

    return playerScore;
}

console.log(variableScope());