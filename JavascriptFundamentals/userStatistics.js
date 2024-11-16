function userStatistics(){
    let totalVisits =0;
    let dailyVisits =500;
    totalVisits += dailyVisits;
    let totalDuration = 6000;
    let avgDuration = totalDuration/totalVisits;

    return {
        avgDuration:avgDuration,
        totalVisits:totalVisits
    }
}
const result = userStatistics();

console.log(result.avgDuration,result.totalVisits);