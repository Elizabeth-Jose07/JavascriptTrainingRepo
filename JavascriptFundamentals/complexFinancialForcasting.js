function complexFinancialForcasting(){
    let principal = 10000; //p
    let annualInterestRateCompound = 0.05;//r
    let annualInterestRateSimple = 0.03; //r
    let interestCompoundedPerYear = 4; //n
    let numOfYearsMOneyInvested = 5 //t

    let compoundInterest = (principal * ((1+ (annualInterestRateCompound/interestCompoundedPerYear)) ** (interestCompoundedPerYear*numOfYearsMOneyInvested))).toFixed(2);

    let simpleInterest =(principal + (principal *annualInterestRateSimple*numOfYearsMOneyInvested)).toFixed(2);

    let interestDifference = (compoundInterest-simpleInterest).toFixed(2);

    return {
        interestDifference: interestDifference,
        compoundInterest: compoundInterest,
        simpleInterest:simpleInterest
    }
}

const result = complexFinancialForcasting();

console.log(`simple interst ${result.simpleInterest},compound interest ${result.compoundInterest}, interest difference ${result.interestDifference}`);
