import faker from 'faker';

export interface ISportSubCategory {
  id: string;
  position: string;
}
export interface ISportCategory {
  id: string;
  category: string;
  subcategories: Array<ISportSubCategory>;
}

export type ISportCategories = Array<ISportCategory>;

const sports: {id: string; category: string}[] = [
  {
    id: faker.random.uuid(),
    category: 'Football',
  },
  {
    id: faker.random.uuid(),
    category: 'BasketBall',
  },
  {
    id: faker.random.uuid(),
    category: 'Soccer',
  },
  {
    id: faker.random.uuid(),
    category: 'E-Sports',
  },
  {
    id: faker.random.uuid(),
    category: 'Baseball',
  },
  {
    id: faker.random.uuid(),
    category: 'Hockey',
  },
  {
    id: faker.random.uuid(),
    category: 'Tennis',
  },
  {
    id: faker.random.uuid(),
    category: 'VolleyBall',
  },
  {
    id: faker.random.uuid(),
    category: 'Cricket',
  },
  {
    id: faker.random.uuid(),
    category: 'Golf',
  },
];

const generatePosition = () => ({
  id: faker.random.uuid(),
  position: capitalizeString(faker.random.word()),
});

export const capitalizeString = (input: any) => {
  return (
    input
      .toString()
      .charAt(0)
      .toUpperCase() + input.slice(1)
  );
};

export const SportCategories: ISportCategories = sports.map(c => {
  return {
    id: c.id,
    category: c.category,
    subcategories: Array.from(
      {length: faker.random.number({min: 5, max: 10})},
      generatePosition,
    ),
  };
});
