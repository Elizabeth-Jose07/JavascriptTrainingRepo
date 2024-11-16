function scientificCalculation() {
    const gravitationalConstant = 6.6743e-11;
    const planksConstant = 6.62607015e-34;
    const speedLight = 299792458;
  
    let frequency = 5e14;
    let distance = 1;
    let objectA = 1;
    let objectB = 1;

  let gravitaionalForce = (gravitationalConstant * objectA * objectB) /(distance *distance);
  
  let energyPhoton = (planksConstant * frequency);
  
  return {
    gravitaionalForce: gravitaionalForce,
    energyPhoton: energyPhoton,
  };
}
const result = scientificCalculation();

console.log("Gravitational force = "+result.gravitaionalForce+" energy of photon = "+result.energyPhoton);
