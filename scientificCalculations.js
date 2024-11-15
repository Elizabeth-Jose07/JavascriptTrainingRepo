function scientificCalculation() {
  const gravitationalConstant = (6.6743 * 10) ** (-11);
  const planksConstant = (6.62607015 * 10) ** (-34);
  const speedLight = 299792458;

  let frequency = (5 * 10) ** 14;
  let distance = 1;
  let objectA = 1;
  let objectB = 1;

  let gravitaionalForce = (gravitationalConstant * objectA * objectB) /distance;
  let g = gravitaionalForce.toFixed(5);
  //gravitaionalForce = gravitaionalForce.toFixed(5);

  let energyPhoton = (planksConstant * frequency);
  let e = energyPhoton.toFixed(5);
  //energyPhoton = energyPhoton.toFixed(5);
  
  return {
    gravitaionalForce: g,
    energyPhoton: e,
  };
}
const result = scientificCalculation();

console.log("Gravitational force = "+result.gravitaionalForce+" energy of photon = "+result.energyPhoton);
