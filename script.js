const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const setRotation = (element, RotationPercentage) => {
  element.style.setProperty("--rotation", RotationPercentage * 360);
};

const setClock = () => {
  const currentDate = new Date();

  const secondsPercentage = currentDate.getSeconds() / 60;
  const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
  const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutesHand);
  setRotation(hoursHand, hoursPercentage);
};

setClock();

setInterval(setClock, 1000);
