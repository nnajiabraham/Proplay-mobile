import {SportCategories} from './fetchPreference';

export const fetchRecentTips = () => {};

export const fetchSearchList = () => {
  return SportCategories.map(sport => ({
    id: sport.id,
    sportName: sport.category,
    positions: sport.subcategories,
  }));
};
