function scientificCalculation() {
  const gravitaionalConstant = (6.6743 * 10) ** -11;
  const planksConstant = (6.62607015 * 10) ** -34;
  const speedLight = 299792458;
  const energyPhoton = (5 * 10) ** 14;

  let distance = 1;
  let objectA = 1;
  let objectB = 1;

  let gravitaionalForce = (gravitaionalConstant * objectA * objectB) / distance;

  return gravitaionalForce;
}

console.log(scientificCalculation());
