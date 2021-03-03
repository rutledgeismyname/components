const batteryPromise = navigator.getBattery();
batteryPromise.then(batteryCallback);

function batteryCallback(batteryObject) {
  printBatteryStatus(batteryObject);
}
function printBatteryStatus(batteryObject) {
  if (batteryObject.level >= 0.9) {
    document.querySelector(
      ".battery"
    ).innerHTML = `<i class="fa fa-battery-full">  <span>${Math.trunc(
      batteryObject.level * 100
    )}%</span>`;
  } else if (batteryObject.level <= 0.89 >= 0.4) {
    document.querySelector(
      ".battery"
    ).innerHTML = `<i class="fa fa-battery-half"> <span>${Math.trunc(
      batteryObject.level * 100
    )}%</span>`;
  }
  if (batteryObject.level <= 0.39) {
    document.querySelector(
      ".battery"
    ).innerHTML = `<i class="fa fa-battery-quarter"> <span>${Math.trunc(
      batteryObject.level * 100
    )}%</span>`;
  }
}