import { Controls } from "./constrols.js";
import { Timer } from "./timer.js";
import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";
import Sounds from "./sounds.js";
import Events from './events.js'

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sounds = Sounds()

Events({controls, timer, sounds});
