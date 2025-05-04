function convertToBanglaDigits(englishNumber) {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return englishNumber.replace(/\d/g, (d) => banglaDigits[d]);
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;

  const banglaTime = convertToBanglaDigits(timeString);
  document.getElementById(
    "banglaTime"
  ).textContent = `বাংলায় সময়: ${banglaTime}`;
}

setInterval(updateClock, 1000);
updateClock();
