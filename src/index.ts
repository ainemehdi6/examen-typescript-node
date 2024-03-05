import { readFileSync } from "fs";

interface Person {
  age: number;
  height: number;
}

function getStatistics(): { meanAge: number; meanHeight: number } {
  const persons: Person[] = JSON.parse(readFileSync("./persons.json").toString());

  const ages = persons.map(person => person.age);
  const maxAge = Math.max(...ages);

  return maxAge;
}

function displayResult() {
  console.log(getStatistics());
}
displayResult();
