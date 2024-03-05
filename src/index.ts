import { readFileSync } from "fs";

interface Person {
  age: number;
  height: number;
}

function getStatistics(): number {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());

  return 0;
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
