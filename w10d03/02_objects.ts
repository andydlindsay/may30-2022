interface IToy {
  squeakability: number;
}

interface IDog {
  id?: number;
  name: string;
  pettabilityScore: number;
  toys: IToy[];
}

const dog: IDog = {
  // id: 4,
  name: 'Dioji',
  pettabilityScore: 7,
  toys: []
};

const dogs: IDog[] = [];

dogs.push(dog);
