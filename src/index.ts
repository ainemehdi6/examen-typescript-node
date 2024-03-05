import { readFileSync } from "fs";

interface Person {
  age: number;
  [key: string]: number;
}

interface Statistics {
  meanAge: number;
  meanHeight: number;
}

function getStatistics(): Statistics | null {
  try {
    const persons: Person[] = JSON.parse(
      readFileSync('./persons.json').toString()
    );

    if (!persons.every((person) => typeof person.age === 'number')) {
      throw new Error(
        'Les données ne sont pas correctement formées.'
      );
    }

    const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
    const totalHeight = persons.reduce((sum, person) => sum + person.taille, 0);

    const meanAge = totalAge / persons.length;
    const meanHeight = totalHeight / persons.length;

    return { 
      meanAge, 
      meanHeight 
    };
  } catch (error: unknown) {
    return null;
  }
}

function displayResult() {
  const statistics = getStatistics();

  if (statistics !== null) {
    console.log(statistics);
  } else {
    console.error('Impossible de calculer les statistiques.');
  }
}

displayResult();