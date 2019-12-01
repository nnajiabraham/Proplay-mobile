export interface IProBio {
  id: string;
  name: string;
  profile_picture: string;
  headline: string;
}

export type IProsBioList = Array<IProBio>;

// unique ids were added so as to avoid position name conflicts and be able to differentiate similar positions programmatically
export const ProSuggestionList: IProsBioList = [
  {
    id: '7ss23d7ce##ff-9adf-4ds9-84c1-fafdcdsdssd566a94d',
    name: 'Craig Roh',
    profile_picture:
      'https://images.unsplash.com/photo-1536456675602-3d631437006c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80',
    headline: 'Defensive Line at Bluebombers',
  },
  {
    id: '8cec8f1d-d4a1-4bbd-88d9-9e7f24d1d5dd',
    name: 'Afonso Pinto',
    profile_picture:
      'https://images.unsplash.com/photo-1565084794475-e6c78c0d8574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=996&q=80',
    headline: 'Quarterback at Vikings',
  },
  {
    id: 'a3e76cdsds54-7f81ffdf-4dffdff-a8ds26-c156a19bba51',
    name: 'Alexander Ljung',
    profile_picture:
      'https://images.unsplash.com/photo-1565084794475-e6c78c0d8574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=996&q=80',
    headline: 'Placekicker at Giants',
  },
  {
    id: '909f84a3-820e-4f35-8eec-a9e85fae0573',
    name: 'Diane Lansdowne',
    profile_picture:
      'https://images.unsplash.com/photo-1568887628423-7c481b26dab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    headline: 'Linebacker at BC Lions',
  },
  {
    id: '2c830d30-5ab1-44fdsdsd2-9654-f6ffsfs6b03c3e9d',
    name: 'Harinder Bharwal',
    profile_picture:
      'https://images.unsplash.com/photo-1565084794475-e6c78c0d8574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=996&q=80',
    headline: 'Defensive Line at Bluebombers',
  },

  {
    id: '7ss23dd7ceff-9adf-4ds9-84c1-fafdc566a94d',
    name: 'Craig Roh',
    profile_picture:
      'https://images.unsplash.com/photo-1518947245819-189062abafd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    headline: 'Defensive Line at Bluebombers',
  },
  {
    id: '8cec8fd1d-d4ads1-4bbd-88ds9-9e7f24dd1d5dd',
    name: 'Afonso Pinto',
    profile_picture:
      'https://images.unsplash.com/photo-1565084794475-e6c78c0d8574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=996&q=80',
    headline: 'Quarterback at Vikings',
  },
  {
    id: 'a3e76c5ds4-7f8ds1-4dfsdf-a8sd26-c156a19bba51',
    name: 'Alexander Ljung',
    profile_picture:
      'https://images.unsplash.com/photo-1518947245819-189062abafd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    headline: 'Placekicker at Giants',
  },
  {
    id: '909f84a3-82ds0e-4f3sd5-8esdec-a9e85sdsfae0573',
    name: 'Diane Lansdowne',
    profile_picture:
      'https://images.unsplash.com/photo-1536456675602-3d631437006c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80',
    headline: 'Linebacker at BC Lions',
  },
  {
    id: '2c830d3sd0-5asdb1-44fsds2-9sd654-f6f6bsd03c3e9d',
    name: 'Harinder Bharwal',
    profile_picture:
      'https://images.unsplash.com/photo-1568887628423-7c481b26dab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    headline: 'Defensive Line at Bluebombers',
  },

  {
    id: '7ss23d7ceff-9adf-4ds9-84c1-fafdc566a94d',
    name: 'Craig Roh',
    profile_picture:
      'https://images.unsplash.com/photo-1568887628423-7c481b26dab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    headline: 'Defensive Line at Bluebombers',
  },
  {
    id: '8cecdsdsf8f1d-d4a1-wd4bbd-88fdwwd9-9e7f24dfd1d5dd',
    name: 'Afonso Pinto',
    profile_picture:
      'https://images.unsplash.com/photo-1536456675602-3d631437006c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80',
    headline: 'Quarterback at Vikings',
  },
  {
    id: 'a3e76c54-7f81-4dff-a826-c156a19bba51',
    name: 'Alexander Ljung',
    profile_picture:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    headline: 'Placekicker at Giants',
  },
  {
    id: '909f84jjiij8ua3-820e-4f35-8eec-a9e85fae0573',
    name: 'Diane Lansdowne',
    profile_picture:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    headline: 'Linebacker at BC Lions',
  },
  {
    id: '2c830d30-5ab1-44f2-9654-f6f6b03c3e9d',
    name: 'Harinder Bharwal',
    profile_picture:
      'https://images.unsplash.com/photo-1510372133218-3989fab34f98?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    headline: 'Defensive Line at Bluebombers',
  },

  {
    id: '7ss23sdsdd7ceff-9adf-4ds9-8c24c1-fafdc566a94d',
    name: 'Craig Roh',
    profile_picture:
      'https://images.unsplash.com/photo-1510372133218-3989fab34f98?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    headline: 'Defensive Line at Bluebombers',
  },
  {
    id: '8cec8232dfd1d-d4ads1-4bbd-88dcs9-9e7f24dd1d5dd',
    name: 'Afonso Pinto',
    profile_picture:
      'https://images.unsplash.com/photo-1488474739786-757973c2dff6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    headline: 'Quarterback at Vikings',
  },
  {
    id: 'a3e76cc325ds4-7f823ds1-4dfsdf-a8sd26-c156a19bba51',
    name: 'Alexander Ljung',
    profile_picture:
      'https://images.unsplash.com/photo-1488474739786-757973c2dff6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    headline: 'Placekicker at Giants',
  },
  {
    id: '909f84a3-82ds0e-4f3c3sd5-8es3c2dec-a9e85sdsfae0573',
    name: 'Diane Lansdowne',
    profile_picture:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    headline: 'Linebacker at BC Lions',
  },
  {
    id: '2c830d33c2sd0-5asc3db1-44fsds2-9s3c2d654-f6f6bsd03c3e9d',
    name: 'Harinder Bharwal',
    profile_picture:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    headline: 'Defensive Line at Bluebombers',
  },
];
