function userProfileData(){
    let userName = 'John Doe'
    let userId = 12345;
    let premiumUser = true;
    let userSummary =  `The user name is ${userName} and the user Id is ${userId}. Is the user a premium user: ${premiumUser}`;
    return userSummary;
}
console.log(userProfileData());

