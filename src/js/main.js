import { lengthUnits } from '../js/constants/length.js';

document.addEventListener('DOMContentLoaded', () => {
  // Adding length options
  const selects = document.getElementsByClassName('select');
  for (const select of selects) {
    for (const { name, id } of lengthUnits) {
      select.add(new Option(name, id));
    }
  }
});
