function cryptoCurrency() {
  const bitCoinRate = 35000;
  const ethreumRate = 2000;
  const dogeCoinRate = 0.005;

  let bitCoinAmount = 2;
  let ethereumAmount = 5;
  let dogeCoinAmount = 10000;

  let bitCoinTotal = bitCoinAmount * bitCoinRate;
  let ethereumTotal = ethereumAmount * ethreumRate;
  let dogeCoinTotal = dogeCoinAmount * dogeCoinRate;

  let totalInUSD = bitCoinTotal + ethereumTotal + dogeCoinTotal;

  return totalInUSD;

}

console.log(cryptoCurrency());