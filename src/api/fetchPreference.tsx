export interface ISportCategory {
  category: string;
  subcategories: Array<string>;
}

export type ISportCategories = Array<ISportCategory>;

export const SportCategories: ISportCategories = [
  {
    category: 'Football',
    subcategories: [
      'Defensive Line',
      'LineBacker',
      'Quarterback',
      'Place Kicker',
      'Secondary',
    ],
  },
  {
    category: 'Basketball',
    subcategories: [
      'Point Guard',
      'Shooting Guard',
      'Center',
      'Power Forward',
      'Small Forward',
    ],
  },
  {
    category: 'Soccer',
    subcategories: [
      'GoalKeeper',
      'Defender',
      'Winger',
      'Defensive Midfielder',
      'Attacking Midfielder',
      'Striker',
    ],
  },
];
