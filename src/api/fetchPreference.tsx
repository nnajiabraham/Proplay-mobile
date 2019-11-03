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
    category: 'Baseball',
    subcategories: [
      'Pitcher',
      'First Base',
      'Quarterback',
      'Catcher',
      'Place Kicker',
      'Secondary',
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
