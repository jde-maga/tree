import Chance from 'chance';
import { Person } from './types';

const chance = new Chance();

interface InternalPerson {
  id: string;
  name: string;
  level: number;
  children?: InternalPerson[];
}

const createPerson = (level = 1): InternalPerson => {
  const person: InternalPerson = {
    id: chance.guid(),
    name: chance.first(),
    level,
  };
  if (chance.bool() && person.level < 5) {
    level += 1;
    person.children = [];
    const total = chance.integer({ min: 0, max: 8 });
    for (let n = 0; n < total; n += 1) {
      person.children.push(createPerson(person.level + 1));
    }
  }
  return person;
};

export const generateFlatTree = (): Person[] => {
  const total = chance.integer({ min: 3, max: 8 });
  let list: Person[] = [];
  for (let n = 0; n < total; n += 1) {
    list.push(createPerson());
  }
  const flatten = (
    arr: Person[],
    {
      id,
      name,
      children,
      parent,
    }: Person & { children: InternalPerson['children'] }
  ): Person[] => {
    arr.push({ id, name, parent });
    if (children && children.length) {
      arr = arr.concat(
        children
          .map((child) => ({ ...child, parent: id }))
          .reduce<Person[]>(flatten as any, [])
      );
    }
    return arr;
  };
  return list
    .reduce<Person[]>(flatten as any, [])
    .sort(() => chance.integer({ min: -1, max: 1 }));
};
