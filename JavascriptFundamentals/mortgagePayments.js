function mortgagePayments(){
    let principal = 200000;
    let interestRate = 0.50;
    let years = 30;

    let monthlyInterest = interestRate/12;
    let numberOfMonths = years * 12;

    let x = Math.pow(1+monthlyInterest,numberOfMonths);
    let monthlyPayment = (principal*x*monthlyInterest)/(x-1);
    return monthlyPayment

}
 console.log(mortgagePayments());