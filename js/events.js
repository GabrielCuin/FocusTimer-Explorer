import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
} from "./elements.js";

export default function ({ controls, timer, sounds }) {
  buttonPlay.addEventListener("click", () => {
    controls.play();
    timer.countDown();
    sounds.pressButton();
  });

  buttonPause.addEventListener("click", () => {
    controls.pause();
    timer.hold();
    sounds.pressButton();
  });

  buttonStop.addEventListener("click", () => {
    controls.reset();
    timer.reset();
    sounds.pressButton();
  });

  buttonSoundOn.addEventListener("click", () => {
    buttonSoundOn.classList.add("hide");
    buttonSoundOff.classList.remove("hide");
    sounds.bgAudio.play();
  });

  buttonSoundOff.addEventListener("click", () => {
    buttonSoundOn.classList.remove("hide");
    buttonSoundOff.classList.add("hide");
    sounds.bgAudio.pause();
  });

  buttonSet.addEventListener("click", () => {
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
      timer.reset();
      return;
    }
    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });

  return {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
  };
}
