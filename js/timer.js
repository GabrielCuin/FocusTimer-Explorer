import Sounds from './sounds.js'

export function Timer({ minutesDisplay, secondsDisplay, resetControls }) {
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? minutes : seconds;

    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
    //Preenche a string com o número de caracteres determinado
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  function countDown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      updateDisplay(minutes, 0);

      if (minutes <= 0 && seconds <= 0) {
        resetControls();
        updateDisplay();
        Sounds().timeEnd();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countDown();
    }, 1000);
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  function hold() {
    //Para os timesOuts
    clearTimeout(timerTimeOut);
  }

  return {
    countDown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
  };
}

// named export
//export {countDown, resetTimer}
