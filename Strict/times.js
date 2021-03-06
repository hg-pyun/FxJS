import timesL from "../Lazy/timesL.js";
import curry from "./curry.js";
import takeAll from "./takeAll.js";

export default curry(function times(f, n) {
  return takeAll(timesL(f, n));
});