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

// unique ids were added so as to avoid position name conflicts and be able to differentiate similar positions programmatically
export const SportCategories: ISportCategories = [
  {
    id: '75d7ceff-9adf-4e39-84c1-fafdc566a94d',
    category: 'Football',
    subcategories: [
      {
        id: '8cdb345c-b8ce-40a0-959a-77f185d74ef9',
        position: 'Defensive Line',
      },
      {
        id: 'bd1de6e0-0ae3-4e5b-b145-1ab93418d7e5',
        position: 'LineBacker',
      },
      {
        id: '53c29285-32a1-4dd3-a031-6737f9b0be7e',
        position: 'Quarterback',
      },
      {
        id: '2cf91543-6ae2-4088-9283-59014e055663',
        position: 'Place Kicker',
      },
      {
        id: '84419dd5-f1d5-4fa8-a2fe-e7311b1cc987',
        position: 'Secondary',
      },
    ],
  },
  {
    id: 'e5d83b49-a7f7-412f-b7ed-677bf1ba8cf9',
    category: 'Basketball',
    subcategories: [
      {
        id: '8c80c128-06d9-4d03-8a0b-36d61cb08c44',
        position: 'Point Guard',
      },
      {
        id: '709ce90f-20de-41b5-a7d2-c4ccbd3ac4bf',
        position: 'Shooting Guard',
      },
      {id: '116c5848-0d70-4a9f-bc19-b68bf19fe3a1', position: 'Center'},
      {
        id: 'f705e6b9-1add-4ccb-bb81-ccb2cf2b5559',
        position: 'Power Forward',
      },
      {
        id: 'bb035041-861e-4c8e-ad6d-fc3221816ec8',
        position: 'Small Forward',
      },
    ],
  },
  {
    id: '999096cb-6b37-4206-b505-6a296411a94c',
    category: 'Soccer',
    subcategories: [
      {
        id: '67c51516-a24d-4540-94de-d8916fee5650',
        position: 'GoalKeeper',
      },
      {id: 'bcd84789-ade3-4700-8252-04558b844596', position: 'Defender'},
      {id: 'a2cfd98c-fbb2-4472-a7fb-f244587d5395', position: 'Winger'},
      {
        id: '9ce4bc03-8334-4e35-8de1-9dcca3a4c391',
        position: 'Defensive Midfielder',
      },
      {
        id: '67eefe71-36fa-4242-b87a-89275ea6f056',
        position: 'Attacking Midfielder',
      },
      {id: 'e51d5ff4-5db2-4a1d-b97a-c1d906f0ac53', position: 'Striker'},
    ],
  },
  {
    id: '3339096cb-6bds337-4206-b505-6a296411a94c',
    category: 'E-Sports',
    subcategories: [
      {
        id: '67c51516-a24d-4540-94de-d8916fee5650',
        position: 'GoalKeeper',
      },
      {id: 'bcd84789-ade3-4700-8252-04558b844596', position: 'Defender'},
      {id: 'a2cfd98c-fbb2-4472-a7fb-f244587d5395', position: 'Winger'},
      {
        id: '9ce4bc03-8334-4e35-8de1-9dcca3a4c391',
        position: 'Defensive Midfielder',
      },
      {
        id: '67eefe71-36fa-4242-b87a-89275ea6f056',
        position: 'Attacking Midfielder',
      },
      {id: 'e51d5ff4-5db2-4a1d-b97a-c1d906f0ac53', position: 'Striker'},
    ],
  },
  {
    id: '99909dq26cb-6b37-4206-b505-6a296411a94c',
    category: 'Baseball',
    subcategories: [
      {
        id: '67c51516-a24d-4540-94de-d8916fee5650',
        position: 'GoalKeeper',
      },
      {id: 'bcd84789-ade3-4700-8252-04558b844596', position: 'Defender'},
      {id: 'a2cfd98c-fbb2-4472-a7fb-f244587d5395', position: 'Winger'},
      {
        id: '9ce4bc03-8334-4e35-8de1-9dcca3a4c391',
        position: 'Defensive Midfielder',
      },
      {
        id: '67eefe71-36fa-4242-b87a-89275ea6f056',
        position: 'Attacking Midfielder',
      },
      {id: 'e51d5ff4-5db2-4a1d-b97a-c1d906f0ac53', position: 'Striker'},
    ],
  },
  {
    id: '999096wccb-6b3cdw7-420cd6-b505-6a296411a94c',
    category: 'Tennis',
    subcategories: [
      {
        id: '67c51516-a24d-4540-94de-d8916fee5650',
        position: 'GoalKeeper',
      },
      {id: 'bcd84789-ade3-4700-8252-04558b844596', position: 'Defender'},
      {id: 'a2cfd98c-fbb2-4472-a7fb-f244587d5395', position: 'Winger'},
      {
        id: '9ce4bc03-8334-4e35-8de1-9dcca3a4c391',
        position: 'Defensive Midfielder',
      },
      {
        id: '67eefe71-36fa-4242-b87a-89275ea6f056',
        position: 'Attacking Midfielder',
      },
      {id: 'e51d5ff4-5db2-4a1d-b97a-c1d906f0ac53', position: 'Striker'},
    ],
  },
  {
    id: '9096cb-6b37-4206-b505-6a296411a94c',
    category: 'Cricket',
    subcategories: [
      {
        id: '67c51516-a24d-4540-94de-d8916fee5650',
        position: 'GoalKeeper',
      },
      {id: 'bcd84789-ade3-4700-8252-04558b844596', position: 'Defender'},
      {id: 'a2cfd98c-fbb2-4472-a7fb-f244587d5395', position: 'Winger'},
      {
        id: '9ce4bc03-8334-4e35-8de1-9dcca3a4c391',
        position: 'Defensive Midfielder',
      },
      {
        id: '67eefe71-36fa-4242-b87a-89275ea6f056',
        position: 'Attacking Midfielder',
      },
      {id: 'e51d5ff4-5db2-4a1d-b97a-c1d906f0ac53', position: 'Striker'},
    ],
  },
  {
    id: '9990dcb-6b37-4206-b50dsd5-6a296411a94c',
    category: 'Golf',
    subcategories: [
      {
        id: '67c51516-a24d-4540-94de-d8916fee5650',
        position: 'GoalKeeper',
      },
      {id: 'bcd84789-ade3-4700-8252-04558b844596', position: 'Defender'},
      {id: 'a2cfd98c-fbb2-4472-a7fb-f244587d5395', position: 'Winger'},
      {
        id: '9ce4bc03-8334-4e35-8de1-9dcca3a4c391',
        position: 'Defensive Midfielder',
      },
      {
        id: '67eefe71-36fa-4242-b87a-89275ea6f056',
        position: 'Attacking Midfielder',
      },
      {id: 'e51d5ff4-5db2-4a1d-b97a-c1d906f0ac53', position: 'Striker'},
    ],
  },
  {
    id: '9990dcb-6b37-4206-b50fdlk34dsd5-6a296411a94c',
    category: 'VolleyBall',
    subcategories: [
      {
        id: '67c51516-a24d-4540-94de-d8916fee5650',
        position: 'GoalKeeper',
      },
      {id: 'bcd84789-ade3-4700-8252-04558b844596', position: 'Defender'},
      {id: 'a2cfd98c-fbb2-4472-a7fb-f244587d5395', position: 'Winger'},
      {
        id: '9ce4bc03-8334-4e35-8de1-9dcca3a4c391',
        position: 'Defensive Midfielder',
      },
      {
        id: '67eefe71-36fa-4242-b87a-89275ea6f056',
        position: 'Attacking Midfielder',
      },
      {id: 'e51d5ff4-5db2-4a1d-b97a-c1d906f0ac53', position: 'Striker'},
    ],
  },
  {
    id: 'lkok0dcb-6b37-4206-b50dsd5-6a296411a94c',
    category: 'Hockey',
    subcategories: [
      {
        id: '67c51516-a24d-4540-94de-d8916fee5650',
        position: 'GoalKeeper',
      },
      {id: 'bcd84789-ade3-4700-8252-04558b844596', position: 'Defender'},
      {id: 'a2cfd98c-fbb2-4472-a7fb-f244587d5395', position: 'Winger'},
      {
        id: '9ce4bc03-8334-4e35-8de1-9dcca3a4c391',
        position: 'Defensive Midfielder',
      },
      {
        id: '67eefe71-36fa-4242-b87a-89275ea6f056',
        position: 'Attacking Midfielder',
      },
      {id: 'e51d5ff4-5db2-4a1d-b97a-c1d906f0ac53', position: 'Striker'},
    ],
  },
];
