import {capitalizeString} from './fetchPreference';
import faker from 'faker';

export interface IProBio {
  id: string;
  name: string;
  profile_picture: string;
  headline: string;
}

export type IProsBioList = Array<IProBio>;

export const ProSuggestionList: IProsBioList = Array.from(
  {length: 50},
  () =>
    ({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      profile_picture: faker.helpers.contextualCard().avatar,
      headline: capitalizeString(faker.helpers.userCard().company.bs),
    } as IProBio),
);
