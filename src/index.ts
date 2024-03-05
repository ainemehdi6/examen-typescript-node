import { readFileSync } from "fs";

interface Person {
  age: number;
  height: number;
}

function getStatistics(): { meanAge: number; meanHeight: number } {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());

  const ageSum = persons.reduce((sum, person) => sum + person.age, 0);
  const meanAge = ageSum / persons.length;

  const heightSum = persons.reduce((sum, person) => sum + person.height, 0);
  const meanHeight = heightSum / persons.length;

  return {
    meanAge,
    meanHeight,
  };
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
