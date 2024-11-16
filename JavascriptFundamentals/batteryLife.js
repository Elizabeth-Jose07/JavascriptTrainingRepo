function batteryLife() {
  let callDuration = 2;
  let appUsage = 1.5;
  let standByTime = 24;

  let batteryPercentage = 100;

  batteryPercentage -= (callDuration / 5) * 100;
  batteryPercentage -= (appUsage / 3) * 100;
  batteryPercentage -= (standByTime / 50) * 100;

  return batteryPercentage;
}

console.log(batteryLife());
